//? Definimos 4 console logs con el string "tarea #" para simular 4 operaciones que se realizan en javascript
console.log("Tarea 1");

console.log("Tarea 2");

setTimeout(() => {
  console.log("Tarea 3");
}, 3000);
//* Simulamos la asincronia con un console log que demora 3s en mostrarse usando el método setTimeOut que requiere una callback en forma de arrow function y al final el tiempo en milisegundos (3 segundos en este caso, bastante)

console.log("Tarea 4");

// "Tarea 1", "Tarea 2", "Tarea 4", ...(Pasan 3 segundos) "Tarea 3"
//* De esta forma podemos ver cómo a la vez que sigue ejecutando el código del console log de tarea 3 también tiene en segundo plano la ejecución del código asincronico de setTimeOut.
