<?php 
// include "../../../config.php";

use crud\UserCRUD;
use models\User;

include "config.php";
include "form_in_php/test/test_autoload.php";

(new PDO(DB_DSN,DB_USER,DB_PASSWORD))->query("TRUNCATE TABLE user;");
$crud = new UserCRUD();
$user = new User();
// 
$user->first_name = "Mario";
$user->last_name = "Rosso";
$user->birth_city = "Torino";
$user->birthday = "2017-01-01";
$user->gender = "M";
$user->regione_id = 9;
$user->provincia_id = 15;
$user->username = "mariorossi@email.com";
$user->password = md5('Password');

$result = $crud->read(); //7 array | vuoto 
if($result === false ){
    echo "\ndatabase iniziale vuoto\n";
};

$crud->create($user);

$result = $crud->read(1); // User
if(class_exists(User::class) && get_class($result) == User::class ){
    echo "\nread utente esistente test superato\n";
}

// TODO: Update dello stesso utente

var_dump($result);




