function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch (mesDelAño)
{
case "abril","Mayo", "Junio":
alert ("Falta para el Invierno");
break;
case "Julio", "Agosto":
alert ("Abrigate que hace frio");
break;
 default:
alert("Ya pasamos el frio, ahora el calor, a la piletaaaaaaa")
break;
}




}//FIN DE LA FUNCIÓN