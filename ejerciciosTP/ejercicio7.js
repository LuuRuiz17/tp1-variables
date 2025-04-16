/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande */

numeroUno = parseFloat(prompt("Ingresa el primer número: "));
numeroDos = parseFloat(prompt("Ingresa el segundo número: "));
numeroTres = parseFloat(prompt("Ingresa el tercer número: "));

if(numeroUno >= numeroDos && numeroUno >= numeroTres){
    document.writeln("El " + numeroUno + " es el número más grande.");
}
else if (numeroDos >= numeroUno && numeroUno >= numeroTres){
    document.writeln("El " + numeroDos + " es el número más grande.");
}
else{
    document.writeln("El " + numeroTres + " es el número más grande.");
}