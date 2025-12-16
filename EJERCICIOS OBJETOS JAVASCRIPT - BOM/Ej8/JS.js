let nivelActual = 1;
const maxNivel = 5;
const minNivel = 1;

const nivelTexto = document.getElementById('nivelTexto');
const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');
const imgNivel = document.getElementById('imgNivel');
const btnJugarNivel = document.getElementById('jugarNivel');

// URLs de las imágenes por nivel
const imagenes = [
    'https://upload.wikimedia.org/wikipedia/commons/c/ca/Minesweeper_1.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Minesweeper_2.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Minesweeper_3.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4f/Minesweeper_4.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/46/Minesweeper_5.svg'
];

// Actualiza nivel y elementos visuales
function actualizarNivel() {
    nivelTexto.textContent = `Nivel ${nivelActual}`;
    btnAnterior.disabled = nivelActual === minNivel;
    btnSiguiente.disabled = nivelActual === maxNivel;
    imgNivel.src = imagenes[nivelActual - 1];
    imgNivel.alt = `Nivel ${nivelActual}`;
    btnJugarNivel.textContent = `Jugar al nivel ${nivelActual}`;
}

// Botones anterior y siguiente
btnAnterior.addEventListener('click', () => {
    if (nivelActual > minNivel) {
        nivelActual--;
        actualizarNivel();
    }
});
btnSiguiente.addEventListener('click', () => {
    if (nivelActual < maxNivel) {
        nivelActual++;
        actualizarNivel();
    }
});

// Abrir ventana nueva y enviar nivel
btnJugarNivel.addEventListener('click', () => {
    const ancho = 500;
    const alto = 500;
    const x = window.screenX + (window.innerWidth - ancho) / 2;
    const y = window.screenY + (window.innerHeight - alto) / 2;

    const nuevaVentana = window.open(
        'Buscaminas.html',
        '_blank',
        `width=${ancho},height=${alto},left=${x},top=${y}`
    );

    // Enviar nivel a la ventana nueva
    nuevaVentana.onload = () => {
        nuevaVentana.nivel = nivelActual;
        nuevaVentana.inicializarBuscaminas();
    };
});

// Inicialización al cargar
actualizarNivel();
