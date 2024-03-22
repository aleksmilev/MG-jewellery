<?php
    class orders {
        public function __construct(){
            $id = System_calls::encryption($_GET['info'])['id'];
            
            $sql_client = "SELECT * FROM `client` WHERE `id` = '$id';";
            $sql_order = "SELECT * FROM `client_order` WHERE `client_id` = '$id';";

            $orders = [];

            try {
                $connection = System_calls::database_connection();
                
                $client_info = $connection->query($sql_client)[0];
                $order_info = $connection->query($sql_order);

                foreach($order_info as $order){

                    $custom = [];
                    $regular = [];

                    $totle = 0;

                    foreach(json_decode($order->order_info)->custom as $item){
                        $sql = "SELECT * FROM `custom_products` WHERE `id` = '$item->id';";
                        $item_info = $connection->query($sql)[0];

                        $totle += floatval($item_info->price) * $item->quantity;

                        $custom[] = [
                            'id' => $item->id,
                            'name' => $item_info->name,
                            'price' => $item_info->price,
                            'quantity' => $item->quantity,
                        ];
                    }

                    foreach(json_decode($order->order_info)->regular as $item){
                        $sql = "SELECT * FROM `products` WHERE `id` = '$item->id';";
                        $item_info = $connection->query($sql)[0];

                        $totle += floatval($item->price) * $item->quantity;

                        $regular[] = [
                            'id' => $item->id,
                            'name' => $item_info->name,
                            'price' => $item_info->price,
                            'quantity' => $item->quantity,
                        ];
                    }

                    $orders[] = [
                        'order_info' => [
                            'id'=> $order->id,
                            'first_name'=> $client_info->first_name,
                            'last_name'=> $client_info->last_name,
                            'phone'=> $client_info->phone,
                            'date'=> $order->date,
                            'total'=> round($totle, 2),
                            'status'=> $order->status
                        ],
                        'ordered_items' => [
                            'custom' => $custom,
                            'regular'=> $regular
                        ]
                    ];

                }

                echo json_encode($orders);
            }catch (\Throwable $th) {
                echo $th;
            }

        }
    }
?>