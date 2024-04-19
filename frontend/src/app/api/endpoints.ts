const all_endpoints = 
    [
        "/basic/categories", 
        "/basic/store_info",
        "/basic/subscription",
        "/basic/feedback",
        "/basic/store_loaction",
        "/basic/order",

        "/client/info",
        "/client/orders",

        "/user/info",

        "/items/products",
        "/items/product",
        "/items/products/ids",
        "/items/recommended_product",
        "/items/custom/products",
        "/items/custom/product",
        "/items/custom/products/ids",

        "/auth/login",
        "/auth/register",
        "/auth/forgotten_password",
    ] as const;

type Endpoints = typeof all_endpoints[number];

export { Endpoints }