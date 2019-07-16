function mostrar()
{
    var edadmayor;
    
    edadmayor = parseInt(document.getElementById("edad").value);
    
if(edadmayor >=18 && edadmayor<70)
{

alert("Adulto");
}
else if (edadmayor >=13 && edadmayor <=17)
{
alert ("Adolecente");
}
else if (edadmayor >=70){

    alert ("Anciano");
}
else
{
    alert ("Niño");
}

}//FIN DE LA FUNCIÓN