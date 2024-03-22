<?php  
    require __DIR__ . '/system/connection.php';
    require __DIR__ . '/system/posted_data.php';
    require __DIR__ . '/system/encryption.php';
    require __DIR__ . '/system/auth.php';
    require __DIR__ . '/system/json_error.php';

    class System_calls{    
        public static function database_connection(){ // connection.php
            header('Content-Type: application/json; charset=utf-8');
            
            return new connection();
        }

        public static function get_posted_data(){ // get_posted_data.php
            return get_posted_data();
        }

        public static function encryption($input){ // encryption.php
            return decrypt($input);
        }

        public static function check_access($access){ // auth.php
            return check_access($access);
        }

        public static function get_access_level(){ // auth.php
            return get_access_level();
        }

        public static function json_error($erorr){ // json_error.php
            return json_encode($erorr);
        }
    }
    

    class API_outlets{
        public static function categories(){
            require __DIR__ . '/api/basic/categories.php';
            new categories();
        }
        public static function store_info(){
            require __DIR__ . '/api/basic/store_info.php';
            new store_info();
        }
        public static function subscription(){ 
            require __DIR__ . '/api/basic/subscription.php';
            new subscription();
        }
        public static function feedback(){
            require __DIR__ . '/api/basic/feedback.php';
            new feedback();
        }
        public static function store_loaction(){
            require __DIR__ . '/api/basic/store_loaction.php';
            new store_loaction();
        }
        public static function order(){
            require __DIR__ . '/api/basic/order.php';
            new order();
        }
    }

    class Items_outlets{
        public static function products(){
            require __DIR__ . '/api/items/products.php';
            new products();
        }
        public static function product(){
            require __DIR__ . '/api/items/product.php';
            new product();
        }
        public static function products_ids(){
            require __DIR__ . '/api/items/products_ids.php';
            new products_ids();
        }
        public static function custom_products(){
            require __DIR__ . '/api/items/custom_products.php';
            new custom_products();
        }
        public static function custom_products_ids(){
            require __DIR__ . '/api/items/custom_products_ids.php';
            new custom_products_ids();
        }
        public static function custom_product(){
            require __DIR__ . '/api/items/custom_product.php';
            new custom_product();
        }
        public static function recommended(){
            require __DIR__ . '/api/items/recommended.php';
            new recommended();
        }
    }

    class Clients_outlets{
        public static function info(){
            require __DIR__ . '/api/clients/info.php';
            new info();
        }
        public static function orders(){
            require __DIR__ . '/api/clients/orders.php';
            new orders();
        }
    }

    class Users_outlets{
        public static function info(){
            require __DIR__ . '/api/users/info.php';
            new info();
        }
    }

    class Auth_outlets{
        public static function login(){
            require __DIR__ . '/api/auth/login.php';
            new login();
        }
        public static function register(){
            require __DIR__ . '/api/auth/register.php';
            new register();
        }
        public static function forgotten(){
            require __DIR__ . '/api/auth/forgotten.php';
            new forgotten();
        }
    }
?>