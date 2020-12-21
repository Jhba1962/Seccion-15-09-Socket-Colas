// Establecer COnexion
var socket = io();

var searchParams = new URLSearchParams(window.location.search);
// console.log(searchParams);

if (!searchParams.has('escritorio')) {

    window.location = "index.html";
    throw new Error('El escritorio es necesario'); // Sale, no se llama return pues no hya función
}

var escritorio = searchParams.get('escritorio');


var label = $('small');
console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);


$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === 'No hay tickets') {
            label.text(resp);
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero)
    });

})