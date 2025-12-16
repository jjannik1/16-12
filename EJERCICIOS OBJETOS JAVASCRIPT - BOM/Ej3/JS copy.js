function descarg() {
  const vent = window.open("", "", "width=720,height=500");

  // Generamos HTML completo dentro de la ventana
  vent.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Descargar RadarSystem</title>
      <style>
        body { font-family: Arial; padding: 20px; }
        label { display: block; margin: 10px 0; }
      </style>
    </head>
    <body>
      <h1>Descargar RadarSystem para <span id="lol"></span></h1>
      <h4>Tu navegador web</h4>

      <p>Selecciona tu paquete de descarga:</p>
      <form method="post">
        <label>
          <input type="radio" name="opcion" value="desktop">
          Dispositivo de escritorio
        </label>
        <label>
          <input type="radio" name="opcion" value="mobile">
          Dispositivo móvil
        </label>
      </form>

      <p>Al descargar RadarSystem, aceptas la <a href="#">Legislación vigente en tu ubicación</a></p>

      <button type="button">Aceptar e instalar</button>

      <script>
        // Obtenemos el navegador dentro de la ventana popup
        const lol = document.getElementById("lol");
        if (navigator.userAgentData) {
          lol.textContent = navigator.userAgentData.brands[0].brand;
        } else {
          // fallback si no hay userAgentData
          lol.textContent = navigator.userAgent;
        }
      </script>
    </body>
    </html>
  `);

  // Opcional: centrar la ventana
  vent.moveTo(
    (screen.availWidth - 720) / 2,
    (screen.availHeight - 500) / 2
  );
}
