// Imprime los números del 1 al 10.

const limite: number = 10;
for (let i = 1; i <= limite; i++) {
  console.log(i);
}

// Imprime los números pares del 2 al 20.

// const limite2: number = 20;
// for (let i: number = 2; i <= limite2; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// };

//  Resultado final recomendado:

const limite2 = 20;

for (let i = 2; i <= limite2; i += 2) {
  console.log(i);
}

// Imprime los números impares del 1 al 15.

const limite3 = 15;
for (let i = 1; i <= limite3; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Imprime los elementos de un array de nombres.

const listaDeNombres: string[] = ['Robert', 'Alan', 'Norberto', 'Alexander'];
for (let i = 0; i < listaDeNombres.length; i++) {
  console.log(listaDeNombres[i]);
};

// Alternativas modernas:
// 1. for...of (más limpio si no necesitas el índice):
for (const nombre of listaDeNombres) {
  console.log(nombre);
}
// 2.forEach() (más declarativo):
listaDeNombres.forEach((nombre) => {
  console.log(nombre);
});

// Imprime los elementos de un array de frutas con su posición.

// Suma todos los números del 1 al 100.

// Multiplica todos los números del 1 al 10.

// Calcula el promedio de un array de números.

// Cuenta cuántos números son mayores a 10 en un array.

// Encuentra el número más grande de un array.

// Cuenta cuántas veces aparece la letra "a" en una palabra.

// Invierte una palabra usando un bucle for.

// Convierte todos los strings de un array a mayúsculas.

// Cuenta cuántos strings tienen más de 5 caracteres en un array.

// Concatena todos los elementos de un array en una sola cadena.

// Imprime una tabla de multiplicar del número 5.

// Imprime todas las tablas del 1 al 10 usando bucles anidados.

// Crea un patrón de asteriscos como este:
// *
// **
// ***
// ****

// Cuenta cuántas veces se repite cada número en un array.

// Reemplaza los valores negativos por 0 en un array.