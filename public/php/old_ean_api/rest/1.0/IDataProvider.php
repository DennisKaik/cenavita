<?php

interface IDataProvider
{
    public function get_product($ean);

    public function get_search_results($search_string);
}