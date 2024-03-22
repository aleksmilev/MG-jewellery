<?php

    class products {
        public function __construct(){
            switch ($_SERVER['REQUEST_METHOD']) {
                case 'GET':
                    $filters = $_GET['filters'];

                    echo json_encode($this->get_function($filters)); 
                    break;
                case 'POST':

                    break;
                case 'PUT':

                    break;
                case 'DELETE':

                    break;
            }
        }

        private function get_function($filters){
            try {
                $sql_filters = [];

                foreach (json_decode($filters, true) as $filter) {
                    $filter_value = $filter['value']; 

                    if($filter['filter'] == "gender" && $filter_value != '4'){
                        $sql_filters[] = "`gender` = '$filter_value'";
                    }
                    if($filter['filter'] == "max_price"){
                        $sql_filters[] = "CAST(`price` AS DECIMAL(10, 2)) < '$filter_value.00'";
                    }
                    if($filter['filter'] == "min_price"){
                        $sql_filters[] = "CAST(`price` AS DECIMAL(10, 2)) > '$filter_value.00'";
                    }
                    if($filter['filter'] == "categorie"){
                        $sql_filters[] = "`categorie` = '$filter_value'";
                    } 
                }
                $sql = "";

                if($sql_filters != []){
                    $temp = join(" AND ",$sql_filters);
                    $sql = "SELECT * FROM `custom_products` WHERE $temp";
                }else{
                    $sql = "SELECT * FROM `custom_products` WHERE 1";
                }

                $connection = System_calls::database_connection();

                // return $sql;
                return $connection->query($sql);
            } catch (\Throwable $th) {
                return $th;
            }
        }
    }

?>