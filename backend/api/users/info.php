<?php
    class info {
        public function __construct(){
            switch ($_SERVER['REQUEST_METHOD']) {
                case 'GET': 
                    echo json_encode($this->get_function());

                    break;
                case 'POST':
                    $posted_data = System_calls::get_posted_data();
                    echo json_encode($this->post_function($posted_data));

                    break;
                case 'PUT':
                    $posted_data = System_calls::get_posted_data();
                    echo json_encode($this->update_function($posted_data));

                    break;
                case 'DELETE': 
                    echo json_encode($this->delete_function());

                    break;
            }
        }
                
        private function get_function(){
            $id = System_calls::encryption($_GET['info'])['id'];

            $sql = "SELECT * FROM `user` WHERE `id` NOT IN (1, $id);";

            try {
                $connection = System_calls::database_connection();
                $result = $connection->query($sql);

                return $result; 
            } catch (\Throwable $th) {
                return [ 'success' => false, 'error' => $th ];
            }
            // try {
            //     $connection = System_calls::database_connection();
            //     $result = $connection->query($sql);

            //     return $result;
            // } catch (\Throwable $th) {
            //     return [ 'success' => false, 'error' => $th ];
            // }
        }

        private function get_my_function($id){
            $sql = "SELECT * FROM `user` WHERE `id` = '$id';";

            try {
                $connection = System_calls::database_connection();
                $result = $connection->query($sql);

                return $result[0];
            } catch (\Throwable $th) {
                return [ 'success' => false, 'error' => $th ];
            }
        }

        private function post_function($new_data){
            $first_name = $new_data['first_name'];
            $last_name = $new_data['last_name'];
            $email = $new_data['email'];
            $phone = $new_data['phone'];
            $password = $new_data['password'];
            $admin_access = $new_data['admin_access'];

            $sql = "INSERT INTO `user` (`first_name`, `last_name`, `email`, `phone`, `password`, `admin`, `active`) VALUES ('$first_name', '$last_name', '$email', '$phone', '$password', '$admin_access', '1');";

            try {
                $connection = System_calls::database_connection();
                $connection->query($sql);

                return [ 'success' => true ];
            } catch (\Throwable $th) {
                return [ 'success' => false, 'error' => $th->getMessage() ];
            }
        }
        
        private function update_function($new_data){
            $id = $new_data['id'];
            $first_name = $new_data['first_name'];
            $last_name = $new_data['last_name'];
            $email = $new_data['email'];
            $phone = $new_data['phone'];
            $password = $new_data['password'];


            if($password != ''){
                $sql = "UPDATE `user` SET `first_name` = '$first_name', `last_name` = '$last_name', `email` = '$email', `phone` = '$phone', `password` = '$password' WHERE `id` = '$id';";
            } else {
                $sql = "UPDATE `user` SET `first_name` = '$first_name', `last_name` = '$last_name', `email` = '$email', `phone` = '$phone' WHERE `id` = '$id';";

            }

            try {
                $connection = System_calls::database_connection();
                $connection->query($sql);

                return [ 'success' => true , 'client' => $this->get_my_function($id)];
            } catch (\Throwable $th) {
                return [ 'success' => false, 'error' => $th->getMessage() ];
            }
        }

        private function delete_function(){
            $id = $_GET['id'];

            $sql = "UPDATE `user` SET `active`= '0' WHERE `id` = '$id';";

            try {
                $connection = System_calls::database_connection();
                $connection->query($sql);

                return [ 'success' => true ];
            } catch (\Throwable $th) {
                return [ 'success' => false, 'error' => $th->getMessage() ];
            }
        }
    }
?>