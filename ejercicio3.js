
let dialog = document.getElementById('texto');
let numeroOk = Math.floor(Math.random()*10);
console.log(numeroOk);

function numeroAleatorio(){
$('#texto').hide();
    let num = document.getElementById('num');
    var numerito = num.value;

   if(numerito<=10 || numerito<0){

    if(numerito==numeroOk){
        $('#texto').fadeIn();
        dialog.innerHTML = 'Muy bien, adivinaste el numero que pensé es: '+numeroOk;
    }else{
        $('#texto').fadeIn();
        dialog.innerHTML = 'erraste, como cuando le regale un peine a mi tio Mati, intenta de nuevo';
    }
}else{
    $('#texto').fadeIn();
    dialog.innerHTML = 'Dije del 0 al 10!, sos Ayelen?, intentá de nuevo soquete';
}
};

let boton = document.getElementById('boton');
boton.addEventListener('click', numeroAleatorio);

$('#recargar').click(function() {
    location.reload();
});

$('#trampa').click(function (e) { 
    e.preventDefault();
    dialog.innerHTML = 'te rendis? mmm flojito/a como mi tio Eber jaja, el numero que pensé es: <strong>'+numeroOk+'</strong>';
});