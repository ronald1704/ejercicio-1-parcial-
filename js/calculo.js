function calcularFactorial(numero){
  var numeroEvaluar = document.getElementById('numeroPrimo').value;
  var acumulador = 1;
  if(numeroEvaluar % 1==0){
    for (var i = 1; i <= numeroEvaluar; i++) {
      acumulador = acumulador*i;
    }
    alert(acumulador);
  }else {
     alert ("El numero ingresado debe ser entero!!!");
  }
  return contador;
}
