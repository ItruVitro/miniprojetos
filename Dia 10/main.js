function tempo() {
    var data = new Date();

    var diaDaSemana = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var meses = ['JAN', 'FEB', 'MAR', 'APR', 'MAI', 'JUN', 'JUL', 'AGO', 'OCT', 'SEP', 'NOV', 'DEC'];

    var semana = diaDaSemana[data.getDay()];
    var dia = data.getDate();
    var mes = meses[data.getMonth()];
    var ano = data.getFullYear();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    window.document.querySelector('.day').innerHTML = semana + ' ' + dia + ' ' + mes + ' ' + ano;

    if (hora <= 9) {
        hora = '0' + hora;
    } else { }

    if (minutos <= 9) {
        minutos = '0' + minutos;
    }

    window.document.querySelector('.currentTime').innerHTML = hora + ':' + minutos;

}

setInterval(tempo, 1000);