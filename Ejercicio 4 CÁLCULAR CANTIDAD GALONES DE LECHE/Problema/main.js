var n1 = prompt("Ingrese cantidad de litros");
while (n1 == 0)
 {
    n1 = prompt("No tienes nada que vender? Vuelve a intentar!");
 }
document.write("Usted tiene: " + n1 + " litros, que equivalen a: ");
var resultado = parseInt(n1) / 3.785;
document.write(resultado + " Galones de leche");  

/*1 galón= 3.785 litro*/