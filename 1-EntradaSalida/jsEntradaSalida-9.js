/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var num1;
    var total;
    var aumento;

    num1 = document.getElementById("sueldo").value;
    
    num1 = parseInt(num1);

    total = num1 * 0.10;
    aumento = total + num1;
    
    document.getElementById("resultado").value = aumento;
	
}
