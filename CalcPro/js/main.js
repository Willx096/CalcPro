var operandoa;
var operandob;
var operacion;




  //variables
  var resultado = document.getElementById("resultado");

  var zero = document.getElementById("zero");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  
  var resta = document.getElementById("resta");
  var suma = document.getElementById("suma");
  var div= document.getElementById("div");
  var mult = document.getElementById("mult");
  var ac = document.getElementById("ac");
  var flechas= document.getElementById("flechas");
  var porcent= document.getElementById("porcent");
  var punto = document.getElementById("punto");
  var expo = document.getElementById("expo");

  var igual = document.getElementById("igual");
  

  /*Eventos de click*/
  ac.onclick = function(){
    resetear();
  }
  flechas.onclick = function(){}
  porcent.onclick = function(){}

  zero.onclick= function(c){
    resultado.textContent = resultado.textContent + "0";
  }

  uno.onclick= function(c){
    resultado.textContent = resultado.textContent + "1";
  }
  dos.onclick= function(c){
    resultado.textContent = resultado.textContent + "2";
  }
  tres.onclick= function(){
    resultado.textContent = resultado.textContent + "3";
  }
  cuatro.onclick= function(c){
    resultado.textContent = resultado.textContent + "4";
  }
  cinco.onclick= function(c){
    resultado.textContent = resultado.textContent + "5";
  }
  seis.onclick= function(c){
    resultado.textContent = resultado.textContent + "6";
  }
  siete.onclick= function(c){
    resultado.textContent = resultado.textContent + "7";
  }
  ocho.onclick = function(c){
    resultado.textContent = resultado.textContent + "8";
  }
  nueve.onclick = function(c){
   resultado.textContent = resultado.textContent + "9";
  }
  
  /*operadores*/ 
  suma.onclick = function(c){
  operandoa = resultado.textContent;
  operacion = "+";
  limpiar();
}
  resta.onclick = function(c){
  operandoa = resultado.textContent;
  operacion = "-";
  limpiar();
}
  div.onclick = function(c){
  operandoa = resultado.textContent;
  operacion = "/";
  limpiar();
}

  mult.onclick = function(c){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}

igual.onclick = function(c){
    operandob = resultado.textContent;
    resolver();
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0; 
    operacion = "";
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}




