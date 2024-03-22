<?php

    class recommended {
        public function __construct(){
            $sql = "SELECT p.id, p.name, p.price, p.gender, c.name AS category_name, p.module_path, p.mesh_material, p.cover_path, p.description
                        FROM products p
                        JOIN categories c ON p.categorie = c.id
                        ORDER BY `id` DESC LIMIT 8;";

            $connection = System_calls::database_connection();
            
            echo json_encode($connection->query($sql));
        }
    }

?>