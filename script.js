const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navlinks')[0]
const resumebutton = document.getElementsByClassName('resume')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
    resumebutton.classList.toggle('passive')
})

