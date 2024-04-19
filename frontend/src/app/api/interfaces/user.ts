interface User{
    id: string | number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string | number;
    active: boolean | number | string;
    admin: boolean | number | string;
}

export { User }