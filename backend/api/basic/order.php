<?php
    class order {
        public function __construct(){
            switch ($_SERVER['REQUEST_METHOD']) {
                case 'POST':
                    $posted_data = System_calls::get_posted_data();

                    echo json_encode($this->post_function($posted_data['order']));

                    break;                    
            }
        }

        private function post_function($posted_data){
            $profile_id = $posted_data['profile'];

            $loaction = [
                'city' => $posted_data['delivery_info']['city'],
                'postcode' => $posted_data['delivery_info']['postcode'],
                'street_name' => $posted_data['delivery_info']['street_name'],
                'apartment' => $posted_data['delivery_info']['apartment'],
                'details' => $posted_data['delivery_info']['details']
            ];

            $date = date('Y-m-d');

            $sql_update = "UPDATE `client` SET `loaction` = '". json_encode($loaction) ."' WHERE `id` = '$profile_id';";
            $sql_insert = "INSERT INTO `client_order`(`client_id`, `order_info`, `status`, `date`) VALUES ('$profile_id','". json_encode($posted_data['ordered_items']) ."', 'In process', '$date');";
            $sql_get = "SELECT `id` FROM `client_order` ORDER BY `id` DESC LIMIT 1;";
            
            try {
                $connection = System_calls::database_connection();
                $connection->query($sql_update);
                $connection->query($sql_insert);
                
                $id = $connection->query("$sql_get")[0]->id;
                return [ 'success' => true, 'id' => $id ];
            } catch (\Throwable $th) {
                return [ 'success' => false, 'error' => $th->getMessage() ];
            }
        }
    }
?>