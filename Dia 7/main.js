var aniSearch = document.querySelector('.searchIcon');
var aniMenu = document.querySelector('.burguerMenu');
var ativo = false

aniSearch.addEventListener('click', function () {
    var aniField = document.querySelector('.searchField');
    if (!ativo) {
        aniField.classList.add('showLeft');
        aniField.classList.remove('hiddenLeft');
    } else {
        aniField.classList.remove('showLeft');
        aniField.classList.add('hiddenLeft');
    }
    ativo = !ativo
});

aniMenu.addEventListener('click', function () {
    var rightContent = document.querySelector('.content');
    var leftMenu = document.querySelector('.hiddenNav');
    if (!ativo) {
        rightContent.classList.add('moveRight');
        leftMenu.classList.add('moveLeft');
        rightContent.classList.remove('removeRight');
        leftMenu.classList.remove('removeLeft');
    } else {
        rightContent.classList.add('removeRight');
        leftMenu.classList.add('removeLeft');
        rightContent.classList.remove('moveRight');
        leftMenu.classList.remove('moveLeft');
    }
    ativo = !ativo
})
