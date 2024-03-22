<?php

    class custom_product {
        public function __construct(){
            switch ($_SERVER['REQUEST_METHOD']) {
                case 'GET':
                    $id = $_GET['id'];

                    echo json_encode($this->get_function($id)); 
                    break;
                case 'POST':

                    break;
                case 'PUT':

                    break;
                case 'DELETE':

                    break;
            }
        }

        private function get_function($id){
            try {
                $sql = "SELECT * FROM `custom_products` WHERE id = $id;";

                $connection = System_calls::database_connection();

                return $connection->query($sql);
            } catch (\Throwable $th) {
                return $th;
            }
        }
    }

?>