var n1 = prompt("Dime el primer numero");
var n2 = prompt("Dime el segundo numero");
var n3 = prompt("Dime el tercer numero");


document.write(n1 + " , "+ n2 +  " y " + n3 + ": El promedio de estos es: ");

var resultado = (parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3;
document.write(resultado); 
