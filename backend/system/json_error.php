<?php

    function json_error($erorr){
        http_response_code(404);
        
        $erorr_object = [
            'success' => false,
            'error' => $erorr
        ];

        return json_encode($erorr_object);
    }

?>