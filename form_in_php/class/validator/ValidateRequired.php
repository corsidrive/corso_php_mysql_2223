<?php


class ValidateRequired implements Validable {


 public function isValid($value)
 {
    // '    '        => ''
    
    // posso scrivere tutto in una riga trim(strip_tag($value))
    $strip_tag = strip_tags($value);
    $valueWidoutSpace = trim($strip_tag);
    if($valueWidoutSpace == ''){
        return false;
    }
    
    return $valueWidoutSpace;    
    
 }

 public function message()
 {
    return 'campo obbligatorio';
 }

}