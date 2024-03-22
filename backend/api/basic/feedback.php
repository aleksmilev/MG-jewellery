<?php
    class feedback {
        public function __construct(){
            switch ($_SERVER['REQUEST_METHOD']) {
                case 'POST':
                    
                    $posted_data = System_calls::get_posted_data();

                    echo json_encode($this->post_function($posted_data['form']));

                    break;                    
            }
        }

        private function post_function($posted_data){
            $email = $posted_data['email'];
            $first_name = $posted_data['first_name'];
            $last_name = $posted_data['last_name'];
            $message = $posted_data['message'];
            try {
                $sql = "INSERT INTO `feedback`(`first_name`, `last_name`, `email`, `message`) VALUES ('$email','$first_name','$last_name','$message')";
                $connection = System_calls::database_connection();
                $connection->query($sql);

                return [ 'success' => true ];
            } catch (\Throwable $th) {
                return $th;
            }
        }
    }
?>