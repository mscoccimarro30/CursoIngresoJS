function mostrar()
{

	var contador=0;
	
	var respuesta='si';
var suma = 0;
var num;
while(respuesta != 'no'){
 do{

	num=prompt("Ingrese un numero")
 
num=parseInt(num);


}while (isNaN(num));

suma=num +1;
cont++;
respuesta= prompt("Desea continuar");



}

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCIÓN