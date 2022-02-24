const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navlinkitem = document.querySelector(".dropdown-item");


//toggle nav
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
})

nav.addEventListener ("click", () => {
  navlinkitem.classList.toggle('nav-passive');
})


//burger cross animation
burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
})

const navbar = document.querySelector('.navigation');
let navTop = navbar.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);

