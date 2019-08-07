function mostrar()
{
var nota;
var contador=0;
var sexo;
var acumuladorNota=0;
var acumuladorSexof;
var acumuladorSexom;
var cotadorNota=0;
var resultadoNota;
var sexmin;
do{
    contador++;
nota=parseInt(prompt("Ingrese una nota del 0 al 10"));

while(isNaN(nota)){

   nota=prompt("Error. Dato no es numerico.Ingrese una nota de 0 al 10");
}
sexo=prompt("Ingrese el sexo f o m");
if(nota<11 || nota>-1){
acumuladorNota=nota +acomuladorNota;

}else{

nota=parseInt(prompt("Error dato fuera de rango numerico. Ingrese una nota de 0 a 10"));
}
if(sexo =='f'){

    acumuladorSexof=sexo;

}else if(sexo == 'm' || nora > 5){

acumuladorSexom= sexo;
}else{

    sexo=prompt("Error. Ingrese nuevamente un letra f o m");
}
if(contador == 1){
    minimo = nota;
sexmin = sexo;
}else{
    if(nota < minimo){
        minimo=nota;
        sexmin=sexo;
    }
}


}while(contador >5);

resultadoNota=acumuladorNota/contador;



alert("El promedio de las notas totales es " + resultadoNota +", la nota mas baja es " + minimo +" y es de sexo " + sexmin + "<br>y la cantidad de varones con nota mayor o igual a 6 es " + acumuladorSexom  );

}


