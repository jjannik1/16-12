// Nivel inicial
let nivelActual = 1;
const maxNivel = 5;
const minNivel = 1;

// Elementos del DOM
const nivelTexto = document.getElementById('nivelTexto');
const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');

// Función para actualizar la visualización y los botones
function actualizarNivel() {
    nivelTexto.textContent = `Nivel ${nivelActual}`;
    btnAnterior.disabled = nivelActual === minNivel;
    btnSiguiente.disabled = nivelActual === maxNivel;
}

// Función para actualizar el historial
function pushNivel() {
    history.pushState({ nivel: nivelActual }, `Nivel ${nivelActual}`, `#nivel${nivelActual}`);
}

// Eventos de los botones
btnAnterior.addEventListener('click', () => {
    if (nivelActual > minNivel) {
        nivelActual--;
        actualizarNivel();
        pushNivel();
    }
});

btnSiguiente.addEventListener('click', () => {
    if (nivelActual < maxNivel) {
        nivelActual++;
        actualizarNivel();
        pushNivel();
    }
});

// Manejo del historial con botones "Atrás" y "Adelante"
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.nivel) {
        nivelActual = event.state.nivel;
        actualizarNivel();
    }
});

// Inicialización
actualizarNivel();
pushNivel();
