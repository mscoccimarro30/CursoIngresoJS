/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numuno;
    var numdos;
var resultado;
// Coloco las variables del enuncaido a realizar
    numuno = document.getElementById("numeroDividendo").value;
    numdos = document.getElementById("numeroDivisor").value;
//Traigo los elementos ID a variables    

    numuno = parseInt (numuno);
    numdos = parseInt (numdos);
//Convertir en enteros los datos colocados en el ID traidos por el document.getElementById a la variable 
//por ejemplo nomuno

    resultado = numuno % numdos;
//A la variable resultado le asigno a que es igual (en este caso a la suma de var 1 + var 2)    

    alert("El resultado es " + resultado);
//Detallo con un alert el resultado concatenado entre un string y una variable. _"_+_    
}
