
// Este es el array con las URLs de las imágenes de fondo
const imagenesFondo = [
    "url('https://i.postimg.cc/bJx9xkcd/j7.webp')",
    "url('https://i.postimg.cc/fyMjByDC/j8.webp')",
    "url('https://i.postimg.cc/4ynjNsSJ/alex-knight-wfw-Upf-Vqr-KU-unsplash.jpg')",
    "url('https://i.postimg.cc/1RCQxYjm/jezael-melgoza-7-H77-FWk-K-x4-unsplash.jpg')",
    "url('https://i.postimg.cc/QCPwFw2c/jezael-melgoza-al-Y6-Opdw-RQ-unsplash.jpg')",
    "url('https://i.postimg.cc/52vdC9Ny/lin-mei-NYy-Cqd-BOKwc-unsplash.jpg')",
    "url('https://i.postimg.cc/4dWrgmwL/masaaki-komori-qw-PSn-Bvdht-I-unsplash.jpg')",
    "url(https://i.postimg.cc/G2LZVkPT/meric-dagli-7-NBO76-G5-Js-E-unsplash.jpg')",
    "url('https://i.postimg.cc/fWg6qSVk/sora-sagano-8s-OZJ8-JF0-S8-unsplash.jpg')",
    "url('https://i.postimg.cc/BvcrmhFG/tianshu-liu-aq-Z3-UAjs-M4-unsplash.jpg')",
    ];

// Índice de la imagen actual (empieza en cero)
let indiceImagenActual = 0;

// la imagen de fondo inicial
document.body.style.backgroundImage = imagenesFondo[indiceImagenActual];

// Función para cambiar la imagen de fondo
function cambiarImagenFondo() {
    // Incrementamos el índice y reiniciarlo si llega al final del array
    indiceImagenActual = (indiceImagenActual + 1) % imagenesFondo.length;

// aplicamos la nueva imagend de fondo
    document.body.style.backgroundImage = imagenesFondo[indiceImagenActual];
}

// con esto cambiamos la imagen cada 10 segundos
setInterval(cambiarImagenFondo, 10000);