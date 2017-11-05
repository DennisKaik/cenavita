<?php
require('DataProvider_Codecheck.php');
/**
 * REST Ressource für die Suche eines Produktes.
 * Zugriff über:
 * https://users.informatik.haw-hamburg.de/~abv663/rest/1.0/search.php?text={searchString}
 */
if (isset($_GET['text'])) {
    $text = preg_replace("/[^A-Za-z0-9 äüöÄÜÖß]/", '', $_GET['text']);
    while (true) { // strip "  " (two following spaces)
        $temp = $text;
        $text = str_replace('  ', ' ', $text);
        if ($temp == $text) {
            break;
        }
    }
    $text = trim($text);
    if (strlen($text) < 2 or strlen($text) > 30 or is_numeric($text)) {
        $final = [
            'error' => "Bitte präzisieren Sie die Sucheingabe.",
            'code' => 105,
            'success' => false
        ];
    } else {
        $provider = new DataProvider_Codecheck();
        $final = [
            'results' => $provider->get_search_results($text),
            'success' => true
        ];
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