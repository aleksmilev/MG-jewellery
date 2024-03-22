<?php

    class login {
        public function __construct(){
            $email = $_GET["email"];
            $password = $_GET["password"];
        
            $sql_client = "SELECT * FROM `client` WHERE `email` = '$email' AND `password` = '$password';";
            $sql_user = "SELECT * FROM `user` WHERE `email` = '$email' AND `password` = '$password';";

            try {
                $connection = System_calls::database_connection();
                $client_result = $connection->query($sql_client);
                $user_result = $connection->query($sql_user);

                $account = array_merge($client_result, $user_result);
                echo json_encode($account);
            } catch (\Throwable $th) {}
        }
    }

?>