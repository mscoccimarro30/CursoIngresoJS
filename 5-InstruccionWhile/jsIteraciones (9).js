function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta='si';

	do{

		numero = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero))
		{
			numero= parseInt(prompt("Eso no es un numero. Ingrese un numero"));
		}
	if(contador == 0){
		maximo = numero;
		minimo = numero;
		contador++;
	 }
	 else if(numero< maximo){

	

	minimo = numero;

	  } else{
		maximo = numero;
	 }
respuesta = prompt("Desea ingresar otro numero");
		}while(respuesta == 'si');

		document.getElementById('maximo').value= maximo;
		document.getElementById('minimo').value = minimo;




}//FIN DE LA FUNCIÓN