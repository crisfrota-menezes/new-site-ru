<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/small.css" />
    <link
      rel="stylesheet"
      href="css/big.css"
      media="screen and (min-width: 768px)"
    />
    ##RU-UTFPR
    <link
      rel="shortcut icon"
      href="https://icons.iconarchive.com/icons/icons8/windows-8/128/City-Restaurant-icon.png"
    />
  </head>
  <body>
    <section class="container">
      <header>
        <h1>Restaurante Universitário</h1>
      </header>
      <div class="button-group">
        <button id="student" class="button-selection">Estudante</button>
        <button id="visitor" class="button-selection">Visitante</button>
        <button id="admin" class="button-admin">⚙️</button>
      </div>
      <figure>
        <img
          src="https://i.pinimg.com/736x/22/2c/4e/222c4e1b78ca0b22cfe8d0bbc44a5e5e.jpg"
          alt="PIN-UTFPR"
          class="logo"
        />
      </figure>
    </section>
    <section id="login-screen" style="display: none"></section>
    <!-- Precisa adicionar aqui para ele carregar no interface.js, dinamic object -->
    <script type="module" src="js/script.js"></script>
    <!-- Necessário o type module, para poder rodar o script -->
  </body>
</html>
