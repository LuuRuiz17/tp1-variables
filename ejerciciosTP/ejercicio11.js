/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 
input: 20 - Output: El 20 es divisible por 2 y por 5.
input: 210 - Output: El 210 es divisible por 2, por 3, por 5 y por 7. */

const numero = parseInt(prompt("Ingresa un número:"));

let mensaje = `El número ${numero} `; 
let divisible = false;

if(numero % 2 === 0){
    mensaje += "es divisible por 2";
    divisible = true;
}

if(numero % 3 === 0){
    if(divisible) mensaje += " y por 3";
    else {
        mensaje += "es divisible por 3";
        divisible = true;
    }
}

if(numero % 5 === 0){
    if(divisible) mensaje += " y por 5";
    else {
        mensaje += "es divisible por 5";
        divisible = true;
    }
}

if(numero % 7 === 0){
    if(divisible) mensaje += " y por 7";
    else {
        mensaje += "es divisible por 7";
        divisible = true;
    }
}

if(divisible === false){
    mensaje += "no es divisible por 2, por 3, por 5 ni por 7.";
} else {
    mensaje += ".";
}

document.writeln(mensaje);