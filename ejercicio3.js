
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
        $('#texto').css('color', '#008f39');
        dialog.innerHTML = 'Muy bien, adivinaste el numero que pensé es: <strong>'+numeroOk+'</strong>';
    }else{
        $('#texto').fadeIn();
        $('#texto').css('color', '#FF0040');
        dialog.innerHTML = 'Erraste, como cuando le regale un peine a mi tio Mati, intenta de nuevo';
    }
}else{
    $('#texto').css('color', '#FF0040');
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
    $('#texto').css('color', '#000000');
    dialog.innerHTML = 'Te rendis? mmm flojito/a como mi tio Eber jaja, el numero que pensé es: <strong>'+numeroOk+'</strong>';
});