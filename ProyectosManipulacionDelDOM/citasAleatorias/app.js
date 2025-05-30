/* Referenciando elementos */
const botonElem = document.getElementById('boton-cambiar-cita');
const citaElem = document.getElementById('cita');
const autorElem = document.getElementById('autor');

function generarEnteroAleatorio(min, max) {
  // Sin incluir max en los valores posibles
  return Math.floor(Math.random() * (max - min) + min );
}

function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
  autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita);