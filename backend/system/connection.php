<?php

    class connection{
        private $db_host = "localhost:8082";
        private $db_user = "myuser";
        private $db_pass = "mypassword";
        private $db_name = "blagoevgerad";
        
        private $db_connection;

        public function __construct(){
            $this->db_connection = mysqli_connect($this->db_host, $this->db_user, $this->db_pass, $this->db_name);
        }

        public function query($sql){
            $result = mysqli_query($this->db_connection, $sql);

            try {
                $data = array();

                while ($row = mysqli_fetch_object($result)) {
                    $data[] = $row;
                }

                return $data;
            } catch (\Throwable $th) {
                return ["error" => $th];
            }
        }

        public function __destruct(){
            $this->db_connection->close();
        }
    }

?>