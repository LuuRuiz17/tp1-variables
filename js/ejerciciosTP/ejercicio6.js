/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3
Output: El 15 es el número más grande */

numeroUno = parseFloat(prompt("Ingresa el primer número: "));
numeroDos = parseFloat(prompt("Ingresa el segundo número: "));
if(numeroUno>numeroDos){
    document.writeln("El " + numeroUno + " es el número más grande.");
}
else{
    document.writeln("El " + numeroDos + " es el número más grande.");
}