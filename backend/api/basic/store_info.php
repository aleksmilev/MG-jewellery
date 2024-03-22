<?php

    class store_info {
        public function __construct(){
            switch ($_SERVER['REQUEST_METHOD']) {
                case 'GET':
                    echo json_encode($this->get_function()); 
                    break;
                case 'POST':
                    $posted_data = System_calls::get_posted_data();

                    echo json_encode($this->post_function($posted_data['form']));
                    break;
                case 'PUT':

                    break;
                case 'DELETE':

                    break;
            }
        }

        private function get_function(){    
            try {
                $sql = "SELECT * FROM `store_info` WHERE 1";

                $connection = System_calls::database_connection();

                return $connection->query($sql);
            } catch (\Throwable $th) {
                return $th;
            }
        }

        private function post_function($posted_data){
            $title = $posted_data['title'];
            $link = $posted_data['link'];
            $text = $posted_data['text'];

            try {
                $sql = "INSERT INTO `store_info`(`title`, `link`, `text`) VALUES ('$title','$link','$text')";
                $connection = System_calls::database_connection();
                // $connection->query($sql);

                return [ 'success' => true];
            } catch (\Throwable $th) {
                return [ 'success' => false, 'error' => $th->getMessage() ];
            }
        }
    }

?>