/* Determinar si un número es par o impar: Crear un algoritmo que permita al usuario ingresar un número y determinar si es 
par o impar. Mostrar el resultado.*/

const numero = parseInt(prompt("Ingresa un número: "));

if(numero % 2 == 0){
    document.writeln(numero + " es par.");
}else {
    document.writeln(numero + " es impar."); 
}

