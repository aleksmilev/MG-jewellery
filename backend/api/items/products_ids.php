<?php

    class products_ids {
        public function __construct(){
            $ids = $_GET['ids'];

            $connection = System_calls::database_connection();

            if($ids){
                $sql = "SELECT p.id, p.name, p.price, p.gender, c.name AS category_name, p.module_path, p.mesh_material, p.cover_path, p.description
                    FROM products p
                    JOIN categories c ON p.categorie = c.id
                    WHERE p.id IN ($ids)";

                echo json_encode($connection->query($sql));
            }else{
                echo json_encode([]);
            }
        }
    }

?>