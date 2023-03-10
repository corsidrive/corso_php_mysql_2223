<?php 

class Regione {


    public static function all()
    {
        try {
            $conn = new PDO(DB_DSN,DB_USER,DB_PASSWORD);
            $stm = $conn->prepare('SELECT * FROM regione;');
            $stm->execute();
            $result = $stm->fetchAll();
            print_r($result);
        } catch (\PDOException $th) {
            throw $th;
        }
        
    }

}