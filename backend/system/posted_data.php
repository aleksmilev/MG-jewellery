<?php 
    function get_posted_data(){
        $input = file_get_contents('php://input');

        $start = strpos($input, '{');
        $end = strrpos($input, '}');
        $jsonString = substr($input, $start, $end - $start + 1);
        
        return json_decode($jsonString, true);
    }
?>