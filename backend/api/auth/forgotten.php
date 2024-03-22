<?php

    class forgotten {
        public function __construct(){
            $posted_data = System_calls::get_posted_data();

            $email = $posted_data["email"];

            // send reset email logic

            echo json_encode([ 'success' => true ]);
        }
    }

?>