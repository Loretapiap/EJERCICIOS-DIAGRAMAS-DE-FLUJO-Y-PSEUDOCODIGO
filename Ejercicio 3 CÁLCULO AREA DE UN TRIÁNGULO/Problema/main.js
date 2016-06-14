var n1 = prompt("Cúanto mide la base? (sin la unidad)");
while (n1 == 0)
 {
    n1 = prompt("No puede ser cero!. Dime otro");
 }
var n2 = prompt("Cúanto mide la altura? (sin la unidad)");
while (n2 == 0)
 {
    n2 = prompt("No puede ser cero!. Dime otro");
 }
document.write("El área del triángulo es: ");
var resultado = (parseInt(n1) * parseInt(n2)) / 2;
document.write(resultado);  
