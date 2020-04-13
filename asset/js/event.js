const btnMenu = document.getElementById('btn-menu');
const close = document.getElementById('close');
const menu = document.getElementById('menu');
const menuText = document.getElementById('menu-txt'); 

function onMenu() {
    let i= 10;
    let j = 1;

    btnMenu.style.display = 'none';
    close.style.display = 'block';
    menuText.style.display = 'block';
    menu.style.position = 'absolute';

    let screenHeightMenu = setInterval(() => {
        i++;
        menu.style.height = i + 'vh';
        if(i >= 100) {
            clearInterval(screenHeightMenu);
        }
    }, 0);

    let screenWidthMenu = setInterval(() => {
        ++j;
       menu.style.width= j + '%';
        if(j == 100) {
            clearInterval(screenWidthMenu);
        }
    }, 0);
}

function offMenu() {
    let i= 1;
    let j = 1;

    btnMenu.style.display = 'block';
    close.style.display = 'none';
    menuText.style.display = 'none';
    menu.style.position = '';

    let screenHeightMenu = setInterval(() => {
        ++i;
        menu.style.height = 9 + 'vh';
        if(i == 9) {
            clearInterval(screenHeightMenu);
        }
    }, 0)
}


btnMenu.addEventListener('click', onMenu);
close.addEventListener('click', offMenu);
