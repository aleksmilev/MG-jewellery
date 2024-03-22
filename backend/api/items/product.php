<?php

    class product {
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
                $sql = "SELECT p.id, p.name, p.price, p.gender, c.name AS category_name, p.module_path, p.mesh_material, p.cover_path, p.description
                FROM products p
                JOIN categories c ON p.categorie = c.id
                WHERE p.id = $id;";

                $connection = System_calls::database_connection();

                return $connection->query($sql);
            } catch (\Throwable $th) {
                return $th;
            }
        }
    }

?>