function mostrar()
{
var contadorPares=0;
    var  num;
var i;
num = parseInt(prompt("Ingrese un numero"));

for(i = 1 ;i <= num   ;i++){
 
    if( i % 2 == 0){

       console.log(i);
       contadorPares++; 
    }

}



}//FIN DE LA FUNCIÓN