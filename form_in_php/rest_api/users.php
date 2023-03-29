<?php

use crud\UserCRUD;

include "../../config.php";
include "../autoload.php";

// echo $_SERVER['REQUEST_METHOD'];

$crud = new UserCRUD;

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        
        $user_id = filter_input(INPUT_GET,'user_id');
        if(!is_null($user_id)){
            echo json_encode($crud->read($user_id));
        }else{
            $users = $crud->read();
            echo json_encode($users);
        }
    break;

    case 'DELETE':

        $user_id = filter_input(INPUT_GET,'user_id');
        if(!is_null($user_id)){
            $crud->delete($user_id);
            $response = [
                'message' => "user id eliminato con successo",
                'data' => $user_id
            ];
            echo json_encode($response);
        }

        
        
        break;
    
    default:
        # code...
        break;
}