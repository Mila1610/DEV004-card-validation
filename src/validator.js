const validator = {
  //Metodo isValid(creditCardNumber) para el algoritmo Luhn
  isValid(creditCardNumber){
    //volviendo el string en array
    const array = creditCardNumber.split("");
    //Si el input esta lleno
    if(creditCardNumber===""||(isNaN(creditCardNumber)===true)){
      document.getElementById('ingresar').innerHTML = 'Ingresar un numero tarjeta';
      return false
    }
    //Haciendo el Algoritmo de Luhn
    const arrayinvertido=[];
    for(let a=array.length-1; a>=0;a--){
      arrayinvertido.push(array[a]);
    }
    //Doble de cada digito impar
    const doblepares=[];
    const sumadigitos=[];
    let sumatodosdigitos=0;
    for(let b=0;b<arrayinvertido.length;b++){
      if(b%2===0){
        doblepares[b]=parseInt(arrayinvertido[b]);
        sumadigitos[b]=parseInt(arrayinvertido[b]);
      }
      else{
        doblepares[b]=parseInt(arrayinvertido[b])+parseInt(arrayinvertido[b]);
        //Suma de los digitos doblados pares
        if(parseInt(doblepares[b])>=10){
          sumadigitos[b]=(parseInt(doblepares[b])-10)+1;
        }
        else{
          sumadigitos[b]=parseInt(doblepares[b]);
        }
      }
      //Suma de todos los digitos
      sumatodosdigitos=sumatodosdigitos+parseInt(sumadigitos[b]);
    }
    //Si la suma de los digitos es un mutiplo de 10 conertir en booleano
    if(sumatodosdigitos%10===0){
      return true
    }
    else{
      return false
    }
  },

  //Metodo maskify(creditCardNumber) devolver un string donde todos menos los últimos cuatro caracteres sean derrotados por un numeral ( #)
  maskify(creditCardNumber){
    //dejar los ultimo 4 digitos normal y los demas conertirlos en #
    const cuatronumeros= creditCardNumber.replace(/.(?=.{4})/g,"#");
    return cuatronumeros;
  },

  //Metodo franquisia para er de que banco es la tarjeta
  franquisia(creditCardNumber){
    //Obtener el primer carecteres
    const uno=creditCardNumber.substr(0,1);
    switch(uno){
    case "3":
      document.getElementById('banco').innerHTML ='Banco JCB';
      break;
    case "4":
      document.getElementById('banco').innerHTML ='Banco Visa';
      break;
    }
    //Obtener los dos primeros carecteres
    const dos=creditCardNumber.substr(0,2);
    switch(dos){
    case "34":
      document.getElementById('banco').innerHTML ='American Express';
      break;
    case "36":
      document.getElementById('banco').innerHTML ='Diners Club Internacional';
      break;
    case "37":
      document.getElementById('banco').innerHTML ='American Express';
      break;
    case "38":
      document.getElementById('banco').innerHTML ='Diners Club Carta Blanca';
      break;  
    case "51":
      document.getElementById('banco').innerHTML ='tarjeta MasterCard';
      break;  
    case "52":
      document.getElementById('banco').innerHTML ='tarjeta MasterCard';
      break;  
    case "53":
      document.getElementById('banco').innerHTML ='tarjeta MasterCard';
      break;  
    case "54":
      document.getElementById('banco').innerHTML ='tarjeta MasterCard';
      break;  
    case "55":
      document.getElementById('banco').innerHTML ='tarjeta MasterCard';
      break;  
    }
    //Obtener los tres primeros carecteres
    const tres=creditCardNumber.substr(0,2);
    switch(tres){
    case "300":
      document.getElementById('banco').innerHTML ='Diners Club Carta Blanca';
      break;
    case "301":
      document.getElementById('banco').innerHTML ='Diners Club Carta Blanca';
      break;
    case "302":
      document.getElementById('banco').innerHTML ='Diners Club Carta Blanca';
      break;
    case "303":
      document.getElementById('banco').innerHTML ='Diners Club Carta Blanca';
      break;
    case "304":
      document.getElementById('banco').innerHTML ='Diners Club Carta Blanca';
      break;
    case "305":
      document.getElementById('banco').innerHTML ='Diners Club Carta Blanca';
      break;    
    }
    //Obtener los cuatro primeros carecteres
    const cuatro=creditCardNumber.substr(0,4);
    switch(cuatro) {
    case "1800":
      document.getElementById('banco').innerHTML ='Banco JCB';
      break;
    case "2014":
      document.getElementById('banco').innerHTML ='Diners Club en Ruta';
      break;
    case "2131":
      document.getElementById('banco').innerHTML ='Banco JCB';
      break;
    case "2149":
      document.getElementById('banco').innerHTML ='Diners Club en Ruta';
      break;
    case "6011":
      document.getElementById('banco').innerHTML ='Descubrir';
      break;
    }
    //Obtener el primer caracter y que este mal
    const malos=creditCardNumber.substr(0,1);
    switch(malos){
    case "7":
      document.getElementById('banco').innerHTML ='No es de ningun Banco';
      break;
    case "8":
      document.getElementById('banco').innerHTML ='No es de ningun Banco';
      break;
    case "9":
      document.getElementById('banco').innerHTML ='No es de ningun Banco';
      break;
    case "0":
      document.getElementById('banco').innerHTML ='No es de ningun Banco';
      break;
    }
  }
};
export default validator;
