/* Realizar una suma de dos números:  Crear un algoritmo que permita al usuario ingresar dos números, realizar la suma de 
ambos y mostrar el resultado.*/

const numeroUno = parseFloat(prompt("Ingresa el primer número: "));
const numeroDos = parseFloat(prompt("Ingresa el segundo número: "));

const suma = numeroUno + numeroDos;

document.writeln( numeroUno + " + " + numeroDos + " = " + suma);