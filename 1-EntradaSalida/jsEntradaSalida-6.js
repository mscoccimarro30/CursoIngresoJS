/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

   var numuno;
   var numdos;
   var resultado;
    //variables marcadas


    numuno = document.getElementById("numeroUno").value;
    numdos = document.getElementById("numeroDos").value;
// Tomamos ya los numeros del ID

    numuno = parseInt(numuno);
    numdos = parseInt(numdos);
// Convertimos los numeros tomados del ID en enteros

    resultado = numuno + numdos;
// la variable resultado es creada y se le indica valor = la suma de las variables traidas del ID
alert ("El resultado es " + resultado);

//El Aler Informa el resultado colocando como String palabras que identifiquen el resultados concadenando con los +

}


