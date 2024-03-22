<?php
    class info {
        public function __construct(){
            switch ($_SERVER['REQUEST_METHOD']) {
                case 'PUT':
                    $posted_data = System_calls::get_posted_data();
                    echo json_encode($this->update_function($posted_data));

                    break;
                case 'DELETE': 
                    echo json_encode($this->delete_function());

                    break;
            }
        }
                
        private function get_function($id){
            $sql = "SELECT * FROM `client` WHERE `id` = '$id';";

            try {
                $connection = System_calls::database_connection();
                $result = $connection->query($sql);

                return $result[0];
            } catch (\Throwable $th) {
                return [ 'success' => false, 'error' => $th ];
            }
        }
        
        private function update_function($new_data){
            $id = System_calls::encryption($_GET['info'])['id'];
            $first_name = $new_data['first_name'];
            $last_name = $new_data['last_name'];
            $email = $new_data['email'];
            $phone = $new_data['phone'];
            $password = $new_data['password'];
            $loaction = $new_data['loaction'];

            $sql = "UPDATE `client` SET `first_name` = '$first_name', `last_name` = '$last_name', `email` = '$email', `phone` = '$phone' WHERE `id` = '$id';";

            if($password != ''){
                $sql = "UPDATE `client` SET `first_name` = '$first_name', `last_name` = '$last_name', `email` = '$email', `phone` = '$phone', `password` = '$password' WHERE `id` = '$id';";
            } elseif($loaction != ''){
                $sql = "UPDATE `client` SET `first_name` = '$first_name', `last_name` = '$last_name', `email` = '$email', `phone` = '$phone', `loaction` = '$loaction' WHERE `id` = '$id';";
            }

            try {
                $connection = System_calls::database_connection();
                $connection->query($sql);

                return [ 'success' => true , 'client' => $this->get_function($id) ];
            } catch (\Throwable $th) {
                return [ 'success' => false, 'error' => $th->getMessage() ];
            }
        }

        private function delete_function(){
            $id = System_calls::encryption($_GET['info'])['id'];

            $sql = "DELETE FROM `client` WHERE `id` = '$id';";

            try {
                $connection = System_calls::database_connection();
                $connection->query($sql);

                return [ 'success' => true];
            } catch (\Throwable $th) {
                return [ 'success' => false, 'error' => $th->getMessage() ];
            }
        }
    }
?>