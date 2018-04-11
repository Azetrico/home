window.onscroll = function () { scroll() };
var header = document.getElementsByTagName('header')[0];
var sticky = 200;
function scroll() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("coverScroll");
    } else {
        header.classList.remove("coverScroll");
    }
}
var menu = document.getElementById('branches');
var nav = document.getElementsByTagName('header')[0];

function showThis(el) {
    var slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        const element = slides[i];
        element.style.display = 'none';
    }
    document.getElementById(el).style.display = 'block';
}