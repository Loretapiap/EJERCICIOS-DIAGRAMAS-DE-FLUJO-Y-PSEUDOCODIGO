var n1 = prompt("Ingrese cantidad en metros");
while (n1 == 0)
{
    n1 = prompt("No quieres comprar ? Escribe una cantidad que no sea cero!");
}
document.write(n1 + " metros" + " equivale a : ");
var resultado = parseInt(n1) / 0.0254;
document.write(resultado + " pulgadas");  

/*1 pulgada = 0.0254 m*/