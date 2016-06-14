var n1 = prompt("Ingrese costo por minuto en pesos");
while (n1 == 0)
{
    n1 = prompt("Este valor no puede ser cero!");
}
var n2 = prompt("Ingrese tiempo de llamada en minutos");
while (n2 == 0)
{
    n2 = prompt("Este valor no puede ser cero!");
}
document.write("A $" + n1 + " el minuto, el presupuesto para esta llamada es: ");
var resultado = parseInt(n1) * parseInt(n2);
document.write("$" + resultado + " pesos");  
