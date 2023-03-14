let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 3000);

const scrollToUp = document.querySelector('.scrollTop');

window.onscroll = () => {
    if (window.scrollY > 700) {
        scrollToUp.classList.remove('hideScroll');
        scrollToUp.classList.add('showScroll');
    }

    else if (window.scrollY < 700) {
        scrollToUp.classList.remove('showScroll');
        scrollToUp.classList.add('hideScroll');
    }

    scrollToUp.onclick = () => {
        window.scrollTo(0, 0)
    }

}

const linkColor1 = document.querySelector('#index'); 
const linkColor2 = document.querySelector('#index2'); 
const linkColor3 = document.querySelector('#index3'); 
const linkColor4 = document.querySelector('#index4'); 

(window.location.pathname === '/index.html') ? linkColor1.style.color = '#A3B8D7' : linkColor1.style.color = '#fff';
(window.location.pathname === '/index2.html') ? linkColor2.style.color = '#A3B8D7' : linkColor2.style.color = '#fff';
(window.location.pathname === '/index3.html') ? linkColor3.style.color = '#A3B8D7' : linkColor3.style.color = '#fff';
(window.location.pathname === '/index4.html') ? linkColor4.style.color = '#A3B8D7' : linkColor4.style.color = '#fff';
