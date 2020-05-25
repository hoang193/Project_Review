var search = document.getElementsByClassName('search')[0]; 
var iconSearch = document.getElementsByClassName('icon-search')[0];
var iconUser = document.getElementsByClassName('icon-user')[0]; 
var boxUser = document.getElementsByClassName('box-login-user')[0]; 
var slide = Array.from(document.getElementsByClassName('slide'));
var menu = document.getElementsByClassName('menu')[0];

// My function handle event.
function handleEvent(obj, event, cb) {
    obj.addEventListener(event, cb);
}

//Effect Search drag width
let countClickSearch = 1;
let countClickUser = 1;
handleEvent(iconSearch, 'click', function () {
    var width = 30;
    if(countClickSearch % 2 === 0) {
        width*= 4;
        var active = setInterval(() => {
            width--;
            search.style.width = width + 'px';
            if(width === 30) {
                clearInterval(active);
            }
        }, 0);
    }else {
        var active = setInterval(() => {
            width++;
            search.style.width = width + 'px';
            if(width === 200) {
                clearInterval(active);
            }
        }, 0);
    }
    ++countClickSearch;
});

// Effect hide show user login, register.

handleEvent(iconUser, 'click', function() {
    var top = 0;
    if(countClickUser % 2 === 0) {
        boxUser.style.display= "none";
    }else {
        var active = setInterval(() => {
            top++;
            boxUser.style.top = top + 'px';
            boxUser.style.display= "block";
            if(top === 40) {
                clearInterval(active);
            }
        }, 10);
    }
    ++countClickUser;
});

// Effect slide banner

function autoSlide() {
    var index = 0;
    var opacity = 5;
    setInterval(() => {
        for (var i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";  
        }
        slide[index].style.display = "block";
        index++;
        if(index > 2){
            index = 0;
        }
    }, 7000);
}
autoSlide();

// Effect scroll 
window.onscroll= () =>  { scrollFunction(); }

function scrollFunction() {
    if(document.documentElement.scrollTop > 0) {
        menu.style.boxShadow = '0 1px 10px #111111';
        menu.style.padding = 0 + '';
    }else {
        menu.style.boxShadow = 'none';
        menu.style.padding = 10 + 'px';
    }
}

