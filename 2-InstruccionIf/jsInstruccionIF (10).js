function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var num;

num = Math.floor(Math.random()*(11-1))+1

if (num >=9 || num == 10)
//No hace falta el || ya que el >=9 incluye 10 
{
alert(num + " EXCELENTE");
}
else if (num >=4 && num <=8)
{
alert(num + " APROBO");
}
else{

	alert(num + " VAMOS, LA PROXIMA SE PUEDE");
}
}//FIN DE LA FUNCIÓN