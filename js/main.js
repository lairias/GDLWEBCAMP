(function(){
"use strict";
var regalo = document.getElementById('regalo')
document.addEventListener('DOMContentLoaded',function(){
    //campus Datos de usuarios
   var nombre= document.getElementById('nombre');
   var apellido= document.getElementById('apellido');
   var email = document.getElementById('email');
    //Campus pases 
    var pase_dia = document.getElementById('pase_dia');
    var pase_completo =document.getElementById('pase_completo');
    var pase_dosdias = document.getElementById('pase_dosdias');
    //botones y los divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var resultado = document.getElementById('lista-productos');

calcular.addEventListener('click',(e)=>{
    e.preventDefault();
    if(regalo.value === ''){
        alert('Debes elegir un regalo');
        regalo.focus();
    }else{
        var Boletos = pase_dia.value,
        boletos2Dias= pase_dosdias.value,
        boletosCompletos=pase_completo.value
      var tptalPagar = (Boletos * 30) + (boletos2Dias * 45 ) + (boletosCompletos * 50 );


    }
})


})//DOM Content Loaded

})();