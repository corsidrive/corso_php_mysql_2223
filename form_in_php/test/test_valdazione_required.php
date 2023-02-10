<?php 

// $files = scandir("./form_in_php/class/validator");




$datas = [
    '','    ','<h1></h1>'
];

$v = new ValidateRequired();

// v.isValid('a')

foreach ($datas as $index => $data){
    
    if($v->isValid($data) == false) {
        echo "test superato per $data\n";
    }else{
        echo "test numero $index non superato per [$data]\n";
    };
    // $v->getMessage();
}


