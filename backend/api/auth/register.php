<?php

    class register {
        public function __construct(){

            $posted_data = System_calls::get_posted_data();

            $first_name = $posted_data["first_name"];
            $last_name = $posted_data["last_name"];
            $email = $posted_data["email"];
            $password = $posted_data["password"];

            $sql = "INSERT INTO `client`(`first_name`, `last_name`, `email`, `password`, `phone`, `loaction`) VALUES 
                                        ('$first_name','$last_name','$email','$password','','');";

            try {
                $connection = System_calls::database_connection();
                $connection->query($sql);

                echo json_encode([ 'success' => true ]);
            } catch (\Throwable $th) {}
        }
    }

?>