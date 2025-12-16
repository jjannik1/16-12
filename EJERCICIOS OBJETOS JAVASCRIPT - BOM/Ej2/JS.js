let maximizada = false;

function crearVentana() {
  vent = window.open("", "", "width=1280,height=720");

  vent.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Popup</title>
    </head>
    <body>

      <button id="butn" onclick="pantalla()">Maximizar</button>

      <script src="JS.js"></script>
    </body>
    </html>
  `);
}

function pantalla() {
  if (!maximizada) {
    maximizar();
  } else {
    minimizar();
  }
}

function maximizar() {
  window.moveTo(0, 0);
  window.resizeTo(
    screen.availWidth,
    screen.availHeight
  );

  document.getElementById("butn").textContent = "Minimizar";
  maximizada = true;
}

function minimizar() {
  const ancho = screen.availWidth - 100;
  const alto = screen.availHeight - 100;

  window.resizeTo(ancho, alto);
  window.moveTo(50, 50);

  document.getElementById("butn").textContent = "Maximizar";
  maximizada = false;
}
