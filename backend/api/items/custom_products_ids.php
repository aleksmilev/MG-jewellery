<?php

    class custom_products_ids {
        public function __construct(){
            $ids = $_GET['ids'];

            $connection = System_calls::database_connection();

            if($ids){
                $sql = "SELECT * FROM `custom_products` WHERE id IN ($ids)";

                echo json_encode($connection->query($sql));
            }else{
                echo json_encode([]);
            }
        }
    }

?>