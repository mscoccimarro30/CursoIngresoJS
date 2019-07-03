/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo;
    var incremento;
    var total
// detallo variables
    sueldo = document.getElementById("importe").value;
//determino que la variable sueldo se colocara en el ID "importe"
    sueldo = parseInt(sueldo);
 // convierto a un numero entero la variable sueldo   

    incremento = sueldo * 0.25;
// utilizo la variable incremeto para detallar que es igual a la variable sueldo
/// + 0.25 que determina el 25%     
    total = incremento + sueldo;

 /// en la variable total determino que el incremento + sueldo es igual a la variable total    
    document.getElementById("resultado").value = total;
    ///envio al archivo html el resultado a el ID resultado 
}
