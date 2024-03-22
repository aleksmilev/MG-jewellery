<?php   
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

require __DIR__ . '/modules.php';

class Route{
    private static $routes = [];

    public static function add($route){
        self::$routes[] = $route;
    }

    public static function submit(){
        $uri = explode('?', $_SERVER['REQUEST_URI'])[0];

        foreach(self::$routes as $route){
            if($route['path'] === $uri){
                if (System_calls::check_access($route['access'])) { 
                    call_user_func($route['func']);
                } else {
                    echo System_calls::json_error("Access denied.");
                }
            
                return;
            }
        }

        echo System_calls::json_error("Unregister query.");
    }
}

$routes = [
    [
        'path' => '/basic/categories',
        'func' => function () { API_outlets::categories(); },
        'access' => [
            'GET' => 0,
        ]
    ],
    [
        'path' => '/basic/store_info',
        'func' => function () { API_outlets::store_info(); },
        'access' => [
            'GET' => 0,
            'POST' => 1
        ]
    ],
    [
        'path' => '/basic/subscription',
        'func' => function () { API_outlets::subscription(); },
        'access' => [
            'POST' => 0,
        ]
    ],
    [
        'path' => '/basic/feedback',
        'func' => function () { API_outlets::feedback(); },
        'access' => [
            'POST' => 0,
        ]
    ],
    [
        'path' => '/basic/store_loaction',
        'func' => function () { API_outlets::store_loaction(); },
        'access' => [
            'GET' => 0,
        ]
    ],
    [
        'path' => '/basic/order',
        'func' => function () { API_outlets::order(); },
        'access' => [
            'POST' => 0,
        ]
    ],

    [
        'path' => '/items/products',
        'func' => function () { Items_outlets::products(); },
        'access' => [
            'GET' => 0,
        ]
    ],
    [
        'path' => '/items/product',
        'func' => function () { Items_outlets::product(); },
        'access' => [
            'GET' => 0,
        ]
    ],
    [
        'path' => '/items/products/ids',
        'func' => function () { Items_outlets::products_ids(); },
        'access' => [
            'GET' => 0,
        ]
    ],
    [
        'path' => '/items/custom/products',
        'func' => function () { Items_outlets::custom_products(); },
        'access' => [
            'GET' => 0,
        ]
    ],
    [
        'path' => '/items/custom/products/ids',
        'func' => function () { Items_outlets::custom_products_ids(); },
        'access' => [
            'GET' => 0,
        ]
    ],
    [
        'path' => '/items/custom/product',
        'func' => function () { Items_outlets::custom_product(); },
        'access' => [
            'GET' => 0,
        ]
    ],
    [
        'path' => '/items/recommended_product',
        'func' => function () { Items_outlets::recommended(); },
        'access' => [
            'POST' => 0,
        ]
    ],

    [
        'path' => '/client/info',
        'func' => function () { Clients_outlets::info(); },
        'access' => [
            'PUT' => 0,
            'DELETE' => 0,
        ]
    ],
    [
        'path' => '/client/orders',
        'func' => function () { Clients_outlets::orders(); },
        'access' => [
            'GET' => 0,
        ]
    ],
    [
        'path' => '/user/info',
        'func' => function () { Users_outlets::info(); },
        'access' => [
            'GET' => 2,
            'POST' => 2,
            'PUT' => 1,
            'DELETE' => 1,
        ]
    ],

    [
        'path' => '/auth/login',
        'func' => function () { Auth_outlets::login(); },
        'access' => [
            'GET' => 0,
        ]
    ],
    [
        'path' => '/auth/register',
        'func' => function () { Auth_outlets::register(); },
        'access' => [
            'POST' => 0,
        ]
    ],
    [
        'path' => '/auth/forgotten_password',
        'func' => function () { Auth_outlets::forgotten(); },
        'access' => [
            'POST' => 0,
        ]
    ],










    [
        'path' => '/test',
        'func' => function () {},
        'access' => [
            'GET' => 2,
            'POST' => 2,
            'PUT' => 2,
            'DELETE' => 2,
        ]
    ],

    [
        'path' => '/some/api/url',
        'func' => function () { echo '{"success":"true"}'; },
        'access' => [
            'GET' => 0,
            'POST' => 0,
        ]
    ],
    [
        'path' => '/other/api/url',
        'func' => function () { echo '{"success":"true"}'; },
        'access' => [
            'GET' => 0,
            'DELETE' => 2,
        ]
    ],
    [
        'path' => '/api/get/categortes',
        'func' => function () { echo '["test1", "test2", "test3", "test4"]'; },
        'access' => [
            'GET' => 0,
        ]
    ],
];

foreach($routes as $route){
    Route::add($route);
}

Route::submit();

?>
