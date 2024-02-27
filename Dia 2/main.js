var menu = document.querySelector('.menu');
var linhas = document.querySelector('.linhas');
var linha1 = document.getElementById('line1');
var linha2 = document.getElementById('line2');
var linha3 = document.getElementById('line3');
var ativo = false

function AnimeStart() {
    if (ativo) {
        console.log('evento removido');
        linha1.classList.add('ReMoviLineDown');
        linha3.classList.add('ReMoviLineUp');
        linha2.classList.add('ReScaleLineDown');
    }
    else {
        linha1.classList.add('MoviLineDown');
        linha3.classList.add('MoviLineUp');
        linha2.classList.add('ScaleLineDown');
        console.log('evento Ativo');
    }

}

//ativo = !ativo//

function AnimeEnd() {
    if (ativo) {
        console.log('Estoy Loco!');
        linha1.classList.remove('ReMoviLineDown');
        linha3.classList.remove('ReMoviLineUp');
        linha2.classList.remove('ReScaleLineDown');
    }
    else {
        linha1.classList.remove('MoviLineDown');
        linha3.classList.remove('MoviLineUp');
        linha2.classList.remove('ScaleLineDown');
        console.log('evento Ativo');;
    }

}

menu.addEventListener('click', function () {
    AnimeStart();
    ativo = !ativo
    AnimeEnd()
})