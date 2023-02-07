<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>
  <header class="bg-light p-1">
    <h1 class="display-6">Applicazione demo</h1>
  </header>
  <main class="container">

    <section class="row">
      <div class="col-sm-2">

      </div>
      <div class="col-sm-8">

        <form class="mt-1 mt-md-5" action="register-user.php" method="POST">

          <div class="mb-3">
            <label for="first_name" class="form-label">nome</label>
            <input type="text" class="form-control" name="first_name" id="first_name">
          </div>

          <div class="mb-3">
            <label for="last_name" class="form-label">cognome</label>
            <input type="text" class="form-control" name="last_name" id="last_name">
          </div>
          <div class="mb-3">
            <label for="birthday" class="form-label">data di nascita</label>
            <input type="date" class="form-control" name="birthday" id="birthday">
          </div>
          <div class="mb-3">
            <label for="birth_place" class="form-label">luogo di nascita</label>
            <input type="text" class="form-control" name="birth_place" id="birth_place">
          </div>



          <div class="mb-3">
            <span>Genere</span>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="gender_M">
              <label class="form-check-label" for="gender_M">
                Maschile
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="gender_F" checked>
              <label class="form-check-label" for="gender_F">
                Femminile
              </label>

            </div>
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">Nome utente</label>
            <input type="text" class="form-control" name="username" id="username">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" name="password" id="password">
          </div>


          <button class="btn btn-primary btn-sm" type="submit"> Crea </button>
        </form>
      </div>

      <div class="col-sm-2">
      </div>
    </section>
  </main>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    crossorigin="anonymous"></script>
</body>

</html>