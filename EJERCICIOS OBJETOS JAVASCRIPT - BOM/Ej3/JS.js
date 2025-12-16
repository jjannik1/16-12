function descarg() {
     vent = window.open("","", "window.resizeTo(screen.availHeight),height=500");

     vent.document.body.innerHTML= `

     <!DOCTYPE html>
    <html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Document</title>
    </head>
    <body>
        <div>
            <h1>Descargar RadarSystem para <span id='web'></span></h1>
            <h4> <span id='web2'></span></h4>

            <p>Selecciona tu paquete de descarga:</p>

            <form method="post">
              <label>
                <input type="radio" name="opcion" value="opcion1">
                Dispositivo de escritorio
            </label>
            <label>
                <input type="radio" name="opcion" value="opcion2">
                Dispositivo móvil
            </label>
            </form>
    
        <p>Al descargar RadarSystem, acepatas la <a href="#">Legislacion vigente en tu ubicacion <tuLatitud> <tuLongitud></p>


        <button type="button">Aceptar e instalar </button>
        </div>    
    </body>
    </html>`

vent.document.getElementById("web").innerHTML = navigator.userAgentData.brands[0].brand;
vent.document.getElementById("web2").innerHTML = navigator.userAgentData.brands[0].brand + " " + navigator.userAgentData.brands[0].version;
vent.document.getElementById("vers").innerHTML = navigator.userAgentData.brands[0].version;


}