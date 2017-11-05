<?php

class Result
{
    public $ean;
    public $title;
    public $subtitle;
    public $category;

    public function __toString()
    {
        return $this->title;
    }

}

class Product extends Result
{
    public $manufacturer;
    public $origin;
    public $quantity;
    public $product_info;
    public $ingredients;
    public $sugar_value;
    public $fat_value;
    public $salt_value;
    public $is_product_vegan;
    public $is_product_lactose_free;
    public $is_product_gluten_free;

    public function get_product()
    {
        return [
            'ean_id' => $this->ean,
            'title' => $this->title,
            'subtitle' => $this->subtitle,
            'product_info' => $this->product_info,
            'category' => $this->category,
            'quantity' => $this->quantity,
            'origin' => $this->origin,
            'manufacturer' => $this->manufacturer,
            'ingredients' => $this->ingredients,
            'nutrition' => [
                'sugar' => $this->sugar_value,
                'salt' => $this->salt_value,
                'fat' => $this->fat_value
            ],
            'is_vegan' => $this->is_product_vegan,
            'is_lactose_free' => $this->is_product_lactose_free,
            'is_gluten_free' => $this->is_product_gluten_free
        ];
    }

}

class ProductList
{
    private $products;

    public function __construct()
    {
        $this->products = array();
    }

    public function __toString()
    {
        return join("\n", $this->products);
    }

    public function add($product)
    {
        $this->products[] = $product;
    }

    public function get_product_list()
    {
        $product_list = [];
        foreach ($this->products as &$p) {
            $product_list[] = [
                'ean' => $p->ean,
                'title' => $p->title,
                'subtitle' => $p->subtitle,
                'category' => $p->category
            ];
        }
        return $product_list;
    }

    public function get_sorted_product_list($search_text)
    {
        $text_lower = strtolower($search_text);
        $pl = $this->get_product_list();
        foreach ($pl as &$p) { // add sort keys
            if (strtolower(substr($p['title'], 0, strlen($text_lower))) == $text_lower) {
                $p['s1'] = true; // title starts with search string
            } else {
                $p['s1'] = false;
            }
            $all_product_texts_lower = strtolower($p['title'] . ' ' . $p['subtitle'] . ' ' . $p['category']);
            $p['s2'] = 0; // occurrences of lowercase search words in complete lowercase product text
            foreach (explode(' ', $text_lower) as $word) {
                $p['s2'] += substr_count($all_product_texts_lower, trim($word));
            }
        }
        usort($pl, function ($a, $b) { // sort
            if ($a['s1'] and !$b['s1']) {
                return -1;
            }
            if ($b['s1'] and !$a['s1']) {
                return 1;
            }
            if ($a['s2'] > $b['s2']) {
                return -1;
            }
            if ($b['s2'] > $a['s2']) {
                return 1;
            }
            return 0;
        });
        foreach ($pl as &$p) { // remove sort keys
            unset($p['s1']);
            unset($p['s2']);
        }
        return array_slice($pl, 0, 30);
    }

}