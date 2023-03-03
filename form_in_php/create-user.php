<?php

//error_reporting(E_ALL); li vede tutti
//error_reporting(0); li spegne tutti
require "./class/validator/Validable.php";
require "./class/validator/ValidateRequired.php";
require "./class/validator/ValidateDate.php";
print_r($_POST);

$first_name = new ValidateRequired('','Il Nome è obblicatorio');
$last_name  = new ValidateRequired('','Il Cognome è obblicatorio');
$birtday  = new ValidateDate('','La data di nascità non è valida');
$birth_place  = new ValidateRequired('','Il Luogo di nascita è obbligatorio');
$gender  = new ValidateRequired('','Il Genere è obbligaztorio');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $first_name->isValid($_POST['first_name']);
    $last_name->isValid($_POST['last_name']);
    $birth_place->isValid($_POST['birth_place']);
    $gender->isValid($_POST['gender']);
    
    // Usato per il caso dei radio
    // $value = isset($_POST['gender']) ? $_POST['gender'] :'';
    // $gender->isValid($value);
}

/** questo script viene eseguito quanod visualizzo per la prima volta il form */
// if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    
// }

?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Esercitazione Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>
    <header class="bg-light p-1">
        <h1 class="display-6">Applicazione demo</h1>
    </header>
    <main class="container">

        <section class="row">
            <div class="col-sm-6">
                <form class="mt-1 mt-md-5" action="create-user.php" method="post">
                    <div class="mb-3">
                        <label for="first_name" class="form-label">nome</label>
                        <input type="text" 
                            value="<?= $first_name->getValue() ?>"
                            class="form-control <?php echo !$first_name->getValid() ? 'is-invalid':''  ?>" 
                            name="first_name" 
                            id="first_name"
                        >
                      
                        <?php if (!$first_name->getValid()) : ?>
                            <div class="invalid-feedback">
                                <?php echo $first_name->getMessage() ?>
                            </div>
                        <?php endif ?>


                    </div>
                    <div class="mb-3">
                        <label for="last_name" class="form-label">cognome</label>
                        <input type="text"
                               id="last_name"
                               value="<?= $last_name->getValue() ?>"
                               name="last_name" 
                               class="form-control <?php echo !$last_name->getValid() ? 'is-invalid':'' ?>"
                               >
                        <?php if (!$last_name->getValid()) : ?>
                            <div class="invalid-feedback">
                                <?php echo $last_name->getMessage() ?>
                            </div>
                        <?php endif ?>
                    </div>
                    <div class="mb-3">
                        <label for="birthday" class="form-label">Data Di Nascita</label>
                        <input type="date"
                               value="<?= $birtday->getValue() ?>"
                               class="form-control <?php echo !$birtday->getValid() ? 'is-invalid':'' ?>" 
                               name="birthday" 
                               id="birthday">
                        
                        <?php if (!$birtday->getValid()) : ?>
                            <div class="invalid-feedback">
                                <?php echo $birtday->getMessage() ?>
                            </div>
                        <?php endif ?>
                    </div>
                    <div class="mb-3">
                        <label for="birth_place" class="form-label">luogo di nascita</label>
                        <input type="text" 
                               value="<?= $birth_place->getValue() ?>"
                               class="form-control <?php echo $birth_place->getValid() ? 'is-invalid':'' ?>" 
                               name="birth_place" 
                               id="birth_place"
                               >
                        <?php if($birth_place->getValid()):?>
                            <div class="invalid-feedback">
                                <?php echo $birth_place->getMessage() ?>  
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="mb-3">
                        <!-- <h1><?php echo $gender->getValue() == 'M' ? 'AA':'BB' ?></h1> -->
                        <label for="gender" class="form-label">Genere</label>
                        <select name="gender" class="form-select <?php echo !$gender->getValid() ? 'is-invalid' :'' ?>" id="gender">
                            <option value=""></option>
                            <option <?php echo $gender->getValue() == 'M' ? 'selected':''  ?> value="M">M</option>
                            <option <?php echo $gender->getValue() == 'F' ? 'selected':''  ?> value="F">F</option>
                        </select>
                        <?php
                        if (!$gender->getValid()) : ?>
                            <div class="invalid-feedback">
                                <?php echo $gender->getMessage() ?>  
                            </div>
                        <?php endif; ?>
                        
                    </div>
                    <div class="mb-3">
                        <label for="username" class="form-label">nome utente</label>
                        <input type="text" class="form-control <?php echo $isValidUserName ?>" name="username" id="username">
                        <?php
                        if (isset($validatedUserName) && !$validatedUserName) { ?>
                            <div class="invalid-feedback">
                                il nome utente è obbligatorio | il nome utente deve essere una mail
                            </div>
                        <?php
                        }
                        ?>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">password</label>
                        <input type="text" id="password" name="password" class="form-control <?php echo $isValidPassword ?>">
                        <?php
                        if (isset($validatedPassword) && !$validatedPassword) { ?>
                            <div class="invalid-feedback">
                                la password è obbligatoria
                            </div>
                        <?php
                        }
                        ?>
                    </div>

                    <button class="btn btn-primary btn-sm" type="submit">Registrati</button>
                </form>
            </div>



            <div class="col-sm-3">

            </div>
        </section>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>

</html>