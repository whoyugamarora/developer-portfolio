const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');

//toggle nav
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
})


//burger cross animation
burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
})
