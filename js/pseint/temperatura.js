/* Convertir grados Fahrenheit a Celsius: Crear un algoritmo que permita al usuario ingresar una temperatura en grados 
Fahrenheit y convertirla a grados Celsius. La fórmula para convertir de Fahrenheit a Celsius es: C= (5/9)​*(F−32)*/

const fahrenheit = parseInt(prompt("Ingrese una temperatura en Fahrenheit: ")); 
const celsius = (fahrenheit - 32) * (5/9);
document.writeln(fahrenheit + "°F = " + celsius.toFixed(2) + "°C");

// resultado = Math.round((celsius*100)/100);  
// document.writeln(fahrenheit + "°F = " + resultado + "°C");