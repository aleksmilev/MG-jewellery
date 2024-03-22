<?php

    class categories {
        public function __construct(){
            switch ($_SERVER['REQUEST_METHOD']) {
                case 'GET':
                    echo json_encode($this->get_function()); 
                    break;
                case 'POST':

                    break;
                case 'PUT':

                    break;
                case 'DELETE':

                    break;
            }
        }

        private function get_function(){
            try {
                $sql = "SELECT * FROM `categories` WHERE 1";

                $connection = System_calls::database_connection();

                return $connection->query($sql);
            } catch (\Throwable $th) {
                return $th;
            }
        }
    }

?>