'úse strict'

const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.navigation');

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
    } else {
        nav.classList.add('show');
    }
});

