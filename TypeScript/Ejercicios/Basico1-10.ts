// 1.Declara variables con tipos: string, number, boolean.
let nombre: string = 'Robert';
let edad: number = 24;
let estaCasado: boolean = false;

// 2.Declara una función que sume dos números y retorne el resultado.

const sumaDosNumeros = (numero1: number, numero2: number): number => {
  return numero1 + numero2;
}

let suma = sumaDosNumeros(5, 2);


// 3.Crea un objeto con propiedades tipadas (nombre, edad, activo).

// const persona: { nombre: string; edad: number; activo: boolean } = {
//   nombre: 'Robert',
//   edad: 24,
//   activo: true,
// };

// Mejora opcional: usar interface o type
// Para reutilizar o escalar mejor tu código, puedes declarar un type o interface:

interface Persona {
  nombre: string;
  edad: number;
  activo: boolean;
}

type PersonaType = {
  nombre: string;
  edad: number;
  activo: boolean;
};

const persona: Persona = {
  nombre: 'Robert',
  edad: 24,
  activo: true,
};

// Ambas opciones son equivalentes para este caso, y facilitan la reutilización en funciones o clases.

// 4.Declara un array de strings y recórrelo con un for.

let frutasFavoritas: string[] = ['Piña', 'Guineo', 'Manzana', 'Chinola', 'Aguacate'];

for (let i = 0; i < frutasFavoritas.length; i++) {
  console.log(frutasFavoritas[i]);
};

// 5.Usa una función con parámetros opcionales.

// 6.Escribe una función que acepte solo números positivos (usa number).

// 7.Usa enum para representar los días de la semana.

// 8.Crea un tipo Usuario con type y úsalo.

// 9.Crea una función que devuelva un valor void.

// 10.Usa interface para modelar un Producto con nombre, precio, y stock.