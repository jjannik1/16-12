document.getElementById('cambiarEstilo').addEventListener('click', () => {
    // Accedemos a la primera hoja de estilos
    const hoja = document.styleSheets[0];

    // Recorremos las reglas de la hoja de estilos
    for (let i = 0; i < hoja.cssRules.length; i++) {
        const regla = hoja.cssRules[i];

        // Buscamos la regla que afecte al selector 'p'
        if (regla.selectorText === 'p') {
            // Modificamos los estilos
            regla.style.color = 'blue';
            regla.style.fontSize = '25px';
            break; // salimos del bucle al encontrar la regla
        }
    }
});
