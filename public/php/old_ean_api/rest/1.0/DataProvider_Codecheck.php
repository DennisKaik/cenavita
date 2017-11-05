<?php
require('IDataProvider.php');
require('Product.php');

/**
 * Implementierung des Datenanbieters 'Codecheck.info'
 */
class DataProvider_Codecheck implements IDataProvider
{
    const OPERATING_SYSTEM = 'Android';
    const OPERATING_SYSTEM_VERSION = '4.3';
    const ANDROID_KEY = 'androswan4';
    const URL_REST_API = 'http://www.codecheck.info/WebService/rest';
    const USER_AGENT = 'Codecheck/3.6.4-176 (' . self::OPERATING_SYSTEM . '/' . self::OPERATING_SYSTEM_VERSION . ')';
    const DEVICE_MANUFACTURER = 'Samsung';
    const DEVICE_MODEL = 'I9300';
    private $nonce; // base64 decoded
    private $client_nonce; // base64 decoded
    private $device_id; // base64 without padding
    private $session_id; // md5
    private $expire_time; // timestamp seconds

    public function __construct()
    {
        $this->load_config_data();
    }

    public function get_product($ean)
    {
        $product_id = $this->get_json_data(self::URL_REST_API .
            '/prodlist/ean/16777216/' . $ean)['result'][0]['id'];
        if (!$product_id) {
            return null;
        }
        $product_data = $this->get_json_data(self::URL_REST_API .
            '/prod/id/3134336257/' . $product_id)['result'];
        if (!$product_data) {
            return null;
        }
        $p = new Product();
        $p->ean = $ean;
        $p->title = ucfirst($product_data['name']);
        $p->subtitle = ucfirst($product_data['subtit']);
        $p->category = ucfirst($product_data['catName']);
        $p->manufacturer = ucfirst($product_data['manu']);
        $p->product_info = $product_data['addInfo'];
        if (strlen($p->product_info) < 15) {
            $p->product_info = null;
        }
        $p->origin = ucfirst($product_data['orig']);
        $p->quantity = $product_data['quant'];
        $p->ingredients = $product_data['ingr'];
        $p->fat_value = $product_data['trafficLight']['fat']['value'];
        $p->salt_value = $product_data['trafficLight']['salt']['value'];
        $p->sugar_value = $product_data['trafficLight']['sugar']['value'];
        $allergy_details = $product_data['allergySumm'];
        foreach ($allergy_details as $d) {
            if ($d['name'] == 'Gluten') {
                $p->is_product_gluten_free = $d['rateText2'] == 'Glutenfrei';
            } elseif ($d['name'] == 'Laktose') {
                $p->is_product_lactose_free = $d['rateText2'] == 'Laktosefrei';
            } elseif ($d['name'] == 'Vegan') {
                $p->is_product_vegan = $d['rateText2'] == 'Vegan';
            }
        }
        return $p->get_product();
    }

    public function get_search_results($search_string)
    {
        $results = $this->get_json_data(self::URL_REST_API .
            '/prod/gsearch/16777216/4/' . urlencode($search_string))['result'];
        if (!$results) {
            return [];
        }
        $pl = new ProductList();
        foreach ($results as $product_data) {
            $products = $product_data['prodMbrs'];
            foreach ($products as $product) {
                $ean = $product['ean'];
                $category = $product['catName'];
                if ($ean and $category) {
                    $r = new Result();
                    $r->ean = $ean . '';
                    $r->title = ucfirst($product['name']);
                    $r->subtitle = ucfirst($product['subtit']);
                    $r->category = ucfirst($category);
                    $pl->add($r);
                }
            }
        }
        return $pl->get_sorted_product_list($search_string);
    }

    private function load_config_data()
    {
        $config = include __DIR__ . '/config_codecheck.php';
        $this->nonce = $config['nonce'];
        $this->client_nonce = $config['client_nonce'];
        $this->session_id = $config['session_id'];
        $this->expire_time = $config['expire_time'];
        $this->device_id = $config['device_id'];
    }

    private function update_config_data()
    {
        $config = array();
        $config['nonce'] = $this->nonce;
        $config['client_nonce'] = $this->client_nonce;
        $config['session_id'] = $this->session_id;
        $config['expire_time'] = $this->expire_time;
        $config['device_id'] = $this->device_id;
        file_put_contents(__DIR__ . '/config_codecheck.php', '<?php return ' . var_export($config, true) . ';');
    }

    private function update_expire_time($seconds_to_add)
    {
        $this->expire_time = $_SERVER['REQUEST_TIME'] + $seconds_to_add;
    }

    private static function generate_client_nonce($length = 16)
    {
        return base64_encode(random_bytes($length));
    }

    private static function generate_device_id()
    {
        return substr(str_replace('-', '', self::generate_client_nonce()), 0, 22);
    }

    private function get_authorization_header()
    {
        static $secret_bytes = [
            23, 89, 196, 82,
            225, 134, 83, 66,
            59, 53, 246, 158,
            162, 108, 153, 129,
            3, 216, 25, 98,
            141, 25, 148, 227,
            251, 123, 2, 175,
            42, 27, 7, 183
        ];
        $secret = call_user_func_array('pack', array_merge(array('C*'), $secret_bytes));
        $message = self::ANDROID_KEY . base64_decode($this->nonce) . base64_decode($this->client_nonce); // 42 bytes
        $hmac = base64_encode(hash_hmac('sha256', $message, $secret, true));
        return sprintf('DigestQuick nonce="%s",mac="%s"', $this->nonce, $hmac);
    }

    private function get_post_data()
    {
        if ($this->device_id == null) {
            $this->device_id = self::generate_device_id();
        }
        if ($this->client_nonce == null) {
            $this->client_nonce = self::generate_client_nonce();
        }
        $post_data = [
            'sendTargetingInfo' => true,
            'username' => self::ANDROID_KEY,
            'osVersion' => self::OPERATING_SYSTEM_VERSION,
            'personalization' => [
                'veganWarning' => false,
                'lactoseWarning' => false,
                'glutenWarning' => false
            ],
            'clientNonce' => $this->client_nonce,
            'apiLevel' => 4,
            'deviceManufacturer' => self::DEVICE_MANUFACTURER,
            'deviceModel' => self::DEVICE_MODEL,
            'authType' => 'DigestQuick',
            'osName' => self::OPERATING_SYSTEM,
            'deviceId' => $this->device_id
        ];
        if ($this->session_id) {
            $post_data['sessionId'] = $this->session_id;
        }
        return json_encode($post_data);
    }

    private function ensure_login()
    {
        if ($this->client_nonce == null) {
            $this->login();
        } elseif ($this->expire_time <= $_SERVER['REQUEST_TIME']) {
            $this->client_nonce = null;
            $this->login();
        }
    }

    private function login($last_try = false)
    {
        $url = self::URL_REST_API . '/session/auth';
        $options = [
            'http' => [
                //'proxy' => '127.0.0.1:8888',
                'header' =>
                    "Accept-Encoding: gzip\r\n" .
                    "Content-Type: application/json\r\n" .
                    "User-Agent: " . self::USER_AGENT . "\r\n" .
                    "Connection: Keep-Alive\r\n",
                'method' => 'POST',
                'content' => $this->get_post_data()
            ]
        ];
        $context = stream_context_create($options);
        $result = gzdecode(file_get_contents($url, false, $context));
        if (!$result) {
            if (!$last_try) {
                $this->login(true);
            } else {
                self::return_json_error("Es konnte keine Verbindung zur Datenbank hergestellt werden.", 104);
            }
        }
        $result = json_decode($result, true)['result'];
        $this->session_id = $result['sessionId'];
        $this->nonce = $result['nonce'];
        $this->update_expire_time($result['expiresIn']);
        $this->update_config_data();
    }

    private static function return_json_error($text, $code)
    {
        header('Content-type: application/json');
        die(json_encode(['error' => $text, 'code' => $code, 'success' => false], JSON_PRETTY_PRINT));
    }

    private function get_json_data($json_url)
    {
        $this->ensure_login();
        $options = [
            'http' => [
                //'proxy' => '127.0.0.1:8888',
                'header' =>
                    "Accept-Encoding: gzip\r\n" .
                    "Authorization: " . $this->get_authorization_header() . "\r\n" .
                    "User-Agent: " . self::USER_AGENT . "\r\n" .
                    "Connection: Keep-Alive\r\n",
                'method' => 'GET'
            ]
        ];
        $context = stream_context_create($options);
        $result = gzdecode(file_get_contents($json_url, false, $context));
        if (!$result) {
            self::return_json_error("Es konnte keine Verbindung zur Datenbank hergestellt werden.", 103);
        }
        return json_decode($result, true);
    }

}