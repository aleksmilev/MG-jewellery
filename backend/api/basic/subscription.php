<?php

    class subscription {
        public function __construct(){
            switch ($_SERVER['REQUEST_METHOD']) {
                case 'POST':

                    $posted_data = System_calls::get_posted_data();
                    $email = $posted_data['email'];

                    echo json_encode($this->post_function($email));

                    break;
            }
        }

        private function post_function($posted_data){
            try {
                $sql = "INSERT INTO `subscription`(`email`) VALUES ('$posted_data')";
                $connection = System_calls::database_connection();
                $connection->query($sql);

                return [ 'success' => true ];
            } catch (\Throwable $th) {
                return $th;
            }
        }
    }

?>