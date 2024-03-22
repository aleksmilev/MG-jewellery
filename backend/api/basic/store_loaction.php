<?php

    class store_loaction {
        public function __construct(){
            switch ($_SERVER['REQUEST_METHOD']) {
                case 'GET':                    
                    echo json_encode($this->get_function());
                    break;                    

            }
        }

        private function get_function(){
            try {
                $sql = "SELECT * FROM `store_location`";
                $connection = System_calls::database_connection();
                
                return $connection->query($sql);
            } catch (\Throwable $th) {
                return $th;
            }
        }
    }

?>