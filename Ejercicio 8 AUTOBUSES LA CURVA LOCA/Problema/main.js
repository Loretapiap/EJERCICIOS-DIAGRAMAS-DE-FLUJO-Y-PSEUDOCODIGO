var n1 = prompt("Ingrese costo por kilometro");
while (n1 == 0)
{
    n1 = prompt("El viaje no es gratis, verdad? Este valor no puede ser cero!");
}
var n2 = prompt("Ingrese los kilómetros a recorrer");
while (n2 == 0)
{
    n2 = prompt("Este valor no puede ser cero!");
}
document.write("A $" + n1 + " el kilometro recorrido, entonces el presupuesto para este viaje de " + n2 + " km es de ");
var resultado = parseInt(n1) * parseInt(n2);
document.write("$" + resultado + " pesos");  
