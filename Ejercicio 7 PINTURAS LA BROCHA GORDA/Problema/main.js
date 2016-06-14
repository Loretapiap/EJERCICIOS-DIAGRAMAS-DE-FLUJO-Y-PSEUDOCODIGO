var n1 = prompt("Ingrese costo por m2 en pesos");
while (n1 == 0)
{
    n1 = prompt("No regalas tu trabajo verdad? Este valor no puede ser cero!");
}
var n2 = prompt("Ingrese área a pintar en metros cuadrados");
while (n2 == 0)
{
    n2 = prompt("No hay nada que pintar? Este valor no puede ser cero!");
}
document.write("A $" + n1 + " el metro cuadrado, entonces el presupuesto para este trabjo es de: ");
var resultado = parseInt(n1) * parseInt(n2);
document.write("$" + resultado + " pesos");  
