<?php
use crud\UserCRUD;
require "../config.php";
require "./autoload.php";

$users = (new UserCRUD())->read(); 
print_r($users);
?>

<?php require  "./class/views/head-view.php" ?>

<table class="table">
    <!-- riga -->
    <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Cognome</th> 
        <th>Comune</th>
    </tr>
    <tr>
        <td>5</td>
        <td>Mario</td>
        <td>Rossi</td>
        <td>Torino</td>
    </tr>
</table>

<?php require "./class/views/footer-view.php" ?>