const onMenu = document.getElementById('onMenu');
const row1 = document.getElementById('row-1');
const container = document.getElementById('container');
const nav = document.getElementById('nav');
const close = document.getElementById('close');
const onMenuChild = document.getElementById('onMenu-child');
const elementInmenuChild = Array.from(document.getElementsByClassName('n'));
const imgs = document.getElementById('slide-image');
const dots = Array.from(document.getElementsByClassName('dot'));

// Menu 
function menuPhone() {
    let i= 0;
    let top = -70;
    let row = setInterval(() => {
        --i;
        row1.style.top = i + 'px';
        if(i === top) {
            clearInterval(row);
            screenBlack();
        }
    }, 5); 
}

function screenBlack() {
    let i= 0;
    let height = 100;

    container.style.background = '#000';
    nav.style.display= 'block';
    close.style.display = 'block';

    let screen = setInterval(() => {
        ++i;
        container.style.height = i + 'vh';
        if(i === height) {
            clearInterval(screen);
        }
    }, 5);
}

function offMenu() {
    let height = 100;

    nav.style.display = 'none';
    close.style.display = 'none';

    let screen = setInterval(() => {
        --height;
        container.style.height = height + 'vh';
        if(height === 0) {
            clearInterval(screen);
            menuDown();
        }
    }, 5);
}

function menuDown() {
    let top = -70;

    let row = setInterval(() => {
        ++top;
        row1.style.top = top + 'px';
        if(top === 0) {
            clearInterval(row);
        }
    }, 5);
}

function mouseInMenu() {
    for(let i= 0; i < elementInmenuChild.length; i++) {
        elementInmenuChild[i].style.display = 'block';
    }
}

function mouseOutMenu() {
    for(let i= 0; i < elementInmenuChild.length; i++) {
        elementInmenuChild[i].style.display = 'none';
    }
}



onMenu.addEventListener('click', menuPhone);
close.addEventListener('click', offMenu);
onMenuChild.addEventListener('mouseover', mouseInMenu);
onMenuChild.addEventListener('mouseout', mouseOutMenu);


// slide
let index;

function mySlide() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    imgs.setAttribute('src', `./asset/img/picture/banner-slide${index+1}.jpg`);
    dots[index].className += " active";
    index++;
    if(index > dots.length-1) {
        index= 0;
    }
    currentDot();
    setTimeout(mySlide, 6000);
}

function currentDot() {
    for(let i= 0; i < dots.length; i++) {
        dots[i].onclick = () => {
            mySlide(index = i);
        }
    }
}

mySlide(index = 0);

