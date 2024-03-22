<?php 
    function get_info(){
        System_calls::encryption($_GET['info']);
    }

    function check_access($access){
        $requestMethod = $_SERVER['REQUEST_METHOD'];
        if (isset($access[$requestMethod])) {
            $requiredAccessLevel = $access[$requestMethod];
            $userAccessLevel = get_access_level();

            return $userAccessLevel <= $requiredAccessLevel;
        }

        return false;
    }

    function get_access_level(){
        $info = get_info();

        if(isset($info['admin']) && isset($info['active'])){
            if($info['active'] == '1'){
                if($info['admin'] == '1'){
                    return '2';
                }else{
                    return '1';
                }
            }else{
                return '0';
            }
        }else{
            return '0';
        }
    }

?>