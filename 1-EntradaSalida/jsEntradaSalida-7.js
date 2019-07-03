/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numuno;
    var nuemdos;
var resultado;
//Marcamos las variables
    numuno = document.getElementById("numeroUno").value;
    numdos = document.getElementById("numeroDos").value;
//Traemos los valores del ID
    numuno = parseInt (numuno);
    numdos = parseInt (numdos);
//Los valores los convertimos en enteros con la funcion parseInt son las 
//variables que sacamos del ID 
    resultado = numuno + numdos;
//A la variable resultado le detallamos el valor = a la suma de variables 
    alert("El resultado es " + resultado);
// Presentamos en Strimp el resultado con la variable concatenada    
}

function restar()
{
	var numuno;
    var nuemdos;
var resultado;
    numuno = document.getElementById("numeroUno").value;
    numdos = document.getElementById("numeroDos").value;

    numuno = parseInt (numuno);
    numdos = parseInt (numdos);

    resultado = numuno - numdos;

    alert("El resultado es " + resultado);
}

function multiplicar()
{ 
    var numuno;
    var nuemdos;
var resultado;
    numuno = document.getElementById("numeroUno").value;
    numdos = document.getElementById("numeroDos").value;

    numuno = parseInt (numuno);
    numdos = parseInt (numdos);

    resultado = numuno * numdos;

    alert("El resultado es " + resultado);
	
}

function dividir()
{
	var numuno;
    var nuemdos;
var resultado;
    numuno = document.getElementById("numeroUno").value;
    numdos = document.getElementById("numeroDos").value;

    numuno = parseInt (numuno);
    numdos = parseInt (numdos);

    resultado = numuno / numdos;

    alert("El resultado es " + resultado);
}

