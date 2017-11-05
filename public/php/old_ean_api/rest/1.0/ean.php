<?php
require('DataProvider_Codecheck.php');
/**
 * REST Ressource für Ausgabe von JSON Information eines bestimmten Produktes
 * mittels dessen EAN Nummer.
 * Zugriff über:
 * https://users.informatik.haw-hamburg.de/~abv663/rest/1.0/ean.php?id={eanId}
 */
if (isset($_GET['id'])) {
    $ean_id = str_replace('-', '', $_GET['id']);
    if (strlen($ean_id) < 8 or strlen($ean_id) > 13 or !is_numeric($ean_id)) {
        $final = [
            'error' => "Ungültiges Format des Barcodes.",
            'code' => 101,
            'success' => false
        ];
    } else {
        $provider = new DataProvider_Codecheck();
        $product = $provider->get_product($ean_id);
        if ($product) {
            $final = [
                'product' => $product,
                'success' => true
            ];
        } else {
            $final = [
                'error' => "Zu diesem Produkt liegen uns leider keine Daten vor.",
                'code' => 100,
                'success' => false
            ];
        }
    }
} else {
    $final = [
        'error' => "Fehlerhafte Anfrage.",
        'code' => 102,
        'success' => false
    ];
}
// Ausgabe im JSON Format
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($final, JSON_PRETTY_PRINT);