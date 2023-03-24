<?php
use crud\UserCRUD;
require "../config.php";
require "./autoload.php";

$users = (new UserCRUD())->read(); 
// print_r($users);
?>

<?php require  "./class/views/head-view.php" ?>

<table class="table">
    <!-- riga -->
    <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Cognome</th> 
        <th>Comune</th>
        <th>Azioni</th>
    </tr>
    <?php foreach ($users as $user) { ?>
        <tr>
            <td><?= $user->user_id ?></td>
            <td><?= $user->first_name ?></td>
            <td><?= $user->last_name ?></td>
            <td><?= $user->birth_city ?></td>
            <td>
                <a href="create-user.php" class="btn btn-primary btn-xs"> edit </a>
                <button class="btn btn-danger btn-xs"> delete </button>
            </td>
        </tr>
    <?php } ?>
</table>

<?php require "./class/views/footer-view.php" ?>