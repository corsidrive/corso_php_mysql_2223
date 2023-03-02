<?php
/**
 * - Preservare il valore iniziale valido (e ripulito) del campo di testo
 * - visualizzare il messaggio di errore per il singolo campo
 *    - sapere se cè un errore **is valid()**
 *    - ripulire e controllare i valori (sicurezza)
 *    - ogni validazione ha il suo messaggio di errore 
 *    - impostare la classe di bootstrap is-invalid
 *    
 */

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

 
}