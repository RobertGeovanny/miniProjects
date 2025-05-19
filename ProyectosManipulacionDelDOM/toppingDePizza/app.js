//
const ingredientes = document.getElementsByClassName('ingredientes');

function mostarClic(e) {
  console.log(e.target.innerText);
}

// Creando la asociacion entre el elemento, el evento y la funcion que se va a llamar
// ingredientes.addEventListener('click', mostarClic); // .addEventListener recibe 2 argumentos que son: el nombre del evento y el segundo es el nombre de la funcion que va ha manejar ese evento, OJO: solo coloca el nombre de la funcion sin lo ()


// Al obtener una coleccion HTML podemos iterarla como usariamos los ciclos para un array, por lo que podemos usar ese ciclo todos los elementos de la colleccion y hacer algo con ellos uno por uno
for (const toppings of ingredientes) {
  toppings.addEventListener('click', mostarClic);
}