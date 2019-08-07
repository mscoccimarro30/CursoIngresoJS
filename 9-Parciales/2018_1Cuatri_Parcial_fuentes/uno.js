
function mostrar()
{
var lado;

var perimetro=0





do{
    lado=parseInt(prompt("Ingrese dato lado a del triangulo"));
    
while(isNaN(lado)){
lado=parseInt(prompt("Error.Ingrese dato lado a del triangulo"));
}  

}while(lado<0);

perimetro = 3* lado;
document.write("El perimetro es " + perimetro );
}

