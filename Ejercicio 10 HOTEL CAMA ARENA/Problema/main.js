var n1 = prompt("Ingrese el costo de una habitación por día");
while (n1 == 0)
{
    n1 = prompt("Este valor no puede ser cero!");
}
var n2 = prompt("Ingrese días a hospedarse");
while (n2 == 0)
{
    n2 = prompt("Este valor no puede ser cero!");
}
document.write("Si cuesta $" + n1 + " el día de estancia, entonces usted debe pagar: ");
var resultado = parseInt(n1) * parseInt(n2);
document.write("$" + resultado + " pesos por esta habitación");  
