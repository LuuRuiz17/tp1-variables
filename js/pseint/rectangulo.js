/*Calcular el perímetro y área de un rectángulo: Crear un algoritmo que permita al usuario ingresar el largo y el ancho de 
un rectángulo, y calcular su perímetro y área. Las fórmulas son:
Perímetro: P = 2*(largo+ancho)
Área: A=largo×ancho*/

const largo = parseInt(prompt("Ingresa el largo del rectángulo: ")); 
const ancho = parseInt(prompt("Ingresa el ancho del rectángulo: ")); 

p = 2 * (largo + ancho)
a = largo * ancho
	
document.writeln("- Perímetro del Rectángulo: " + p);
document.writeln("<br>- Área del Rectángulo: "  + a);
	