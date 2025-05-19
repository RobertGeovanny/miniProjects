// Basicamente para que entiendas: despues de seleccionar un elemento con querySelector y asignarlo a una variable
// Puedes colocas el metodo 'style' y despues de otro punto signas un valor css.
// const primerIngrediente = document.querySelector('.ingredientes');

// primerIngrediente.style.backgroundColor = 'blue';
// primerIngrediente.style.color = '#6dff00'; // color cambia el color de letra
// primerIngrediente.style.textTransform = 'uppercase'; // transforma el texto a mayusculas.

// Formas de acceder al texto
// const listaDeToppings = document.getElementById('lista-toppings');
// console.log(listaDeToppings.innerText);
// console.log(listaDeToppings.textContent);

// Modificando el texto
// const titulo = document.getElementById('titulo');
// titulo.innerText = 'Mis Topping Favoritos';

// Modificando los atributos de un elemento
// const enlace = document.getElementsByTagName('a');
// console.log(enlace[0].getAttribute('href')); // vemos el valor de href (el enlace a Youtube)
// console.log(enlace[0].removeAttribute('href')); // Tambien podemos remover el atribulo href 
// console.log(enlace[0].setAttribute('href', 'https://www.youtube.com/')); // Podemos asignarle un valor a un atributo especificado de ese elemento 

// Otra operacion importante en JavaScript es la de agregar o modificar clases de forma dinamica
// const primerIngrediente = document.querySelector('.ingredientes');
// primerIngrediente.classList.add('mi-clase'); // Para agregar una clase aun elemento, escribimos el nombre del elemento (despues de haberlo seleccionado desde el DOM) luego llamamos al metodo '.add('mi-clase')' y listo.
// console.log(primerIngrediente.classList); // todas las propiedades que seleccionamos del DOM tendra una propiedad llamada classList y es una lista de todas las clases que tiene ese elemento actualmente
// console.log(primerIngrediente.classList.contains('ingredientes')); // Para verificar si un elemento posee una clase especifica o no en la lista de clases, lo puedes hacer con el metodo .contains() devuelve un valor boolean
// console.log(primerIngrediente.classList.remove('mi-clase')); // Para eliminar clases activas de los elementos usas 'classList'


// Creando, agregando Y eliminando elementos en el DOM, Util cuando recibes informacion de un servidor en formato JSON y necesitas transformar esa informacion
// const listaDeToppings = document.getElementById('lista-toppings'); // Para agregar el 'li' que creamos con createElement, debemos obtener una referencia al elemento del DOM donde queremos agregar el elemento
// const ingredienteNuevo = document.createElement('li'); // En esta sentencia decimos que queremos crear un elemento 'li'
// // antes de agregar este nuevo elemento al DOM deberiamos asignarle estas propiedades al estilo del elemento
// //primero le agregamos una clase con classList.add('')
// ingredienteNuevo.classList.add('topping', 'fondo-marron'); // NOTA: esto no funcionara en tu HTML porque no tienes creadas estas clases, solo lo coloque como ejemplo.
// ingredienteNuevo.innerText = 'Queso Extra';

// // Con el metodo .append() especificamos donde queremos agregar un elemento creado
// listaDeToppings.append(ingredienteNuevo);
// ingredienteNuevo.remove();

// Recorrer el DOM
const listaDeToppings = document.getElementById('lista-toppings');
// Si por algun motivo quieres obtener el elemento padre de algun elemento, lo hacemos con:
// Tambien recuerda parentElement solo accede a los elementos HTML y parentNode
// console.log(listaDeToppings.parentElement.parentElement);
console.log(listaDeToppings.parentElement.children); // Tambien esta la contraparte children que accede al elemento hijo
console.log(listaDeToppings.parentElement.firstChild); // Tambien esta la contraparte firstChildren que accede al elemento hijo, pero este metodo trabaja con nodos, en este caso solo presentara #text, porque los espacios en las etiquetas HTML tambien son nodos
console.log(listaDeToppings.previousElementSibling); // Con este metodo obtenemos el hermano anterior del elemeto