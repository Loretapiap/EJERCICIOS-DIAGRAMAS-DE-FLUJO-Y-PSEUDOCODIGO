var n1 = prompt("Ingrese horas trabajadas");
while (n1 == 0)
{
	n1 = prompt("No trabajaste nada? Ingresa un valor que no sea 0! ");
}
var n2 = prompt("Escriba el ingreso por hora en pesos");
while (n2 == 0)
{
    n2 = prompt("No puede ser cero! (a menos que seas esclavo D:)");
}
document.write("Por: " + n1 + " horas trabajadas, usted posee un sueldo de ");
var resultado = parseInt(n1) * parseInt(n2);
document.write(resultado + " pesos");  
