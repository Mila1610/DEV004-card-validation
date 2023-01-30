import validator from './validator.js';
const boton=document.getElementById("boton");
const input=document.getElementById("cardnumber");
boton.addEventListener("click",function(){
  const validar=validator.isValid(input.value);
  const cuatronuemeros=validator.maskify(input.value);
  validator.franquisia(input.value);
  if (validar===true) {
    document.getElementById('resultado').innerHTML='La Tarjeta es VALIDO';
    input.value=cuatronuemeros;
  }
  else {
    document.getElementById('resultado').innerHTML='La Tarjeta es INVALIDO';
    input.value=cuatronuemeros;
  }
})

