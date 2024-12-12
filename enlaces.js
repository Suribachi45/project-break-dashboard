



function crearEnlace(titulo, url) {
  const nuevoEnlace = document.createElement('li');
  nuevoEnlace.innerHTML = `
    <a href="${url}" target="_blank">${titulo}</a>
    <button class="eliminar">Eliminar</button>
  `;
  return nuevoEnlace;
}

function guardarEnLocalStorage(enlaces) {
  localStorage.setItem('enlaces', JSON.stringify(enlaces));
}

function cargarEnlacesDesdeLocalStorage() {
  const enlacesGuardados = JSON.parse(localStorage.getItem('enlaces')) || [];
  enlacesGuardados.forEach(enlace => {
    const nuevoEnlace = crearEnlace(enlace.titulo, enlace.url);
    listaEnlaces.appendChild(nuevoEnlace);
  });
}

function eliminarEnlace(element) {
  const enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];
  const indice = Array.from(listaEnlaces.children).indexOf(element);
  enlaces.splice(indice, 1);
  guardarEnLocalStorage(enlaces);
  cargarEnlacesDesdeLocalStorage();
}

const listaEnlaces = document.getElementById('lista-enlaces');
const agregarBtn = document.getElementById('agregar');
const tituloInput = document.getElementById('titulo');
const urlInput = document.getElementById('url');

agregarBtn.addEventListener('click', () => {
  const titulo = tituloInput.value.trim();
  const url = urlInput.value.trim();

  if (titulo && url) {
    const nuevoEnlace = crearEnlace(titulo, url);
    listaEnlaces.appendChild(nuevoEnlace);


    const enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];
    enlaces.push({ titulo, url });
    guardarEnLocalStorage(enlaces);

    tituloInput.value = '';
    urlInput.value = '';
  }
});


listaEnlaces.addEventListener('click', (event) => {
  if (event.target.classList.contains('eliminar')) {
    const li = event.target.parentElement;
    eliminarEnlace(li);
  }
});


cargarEnlacesDesdeLocalStorage();