
const navMenuButton = document.getElementById('navMenuButton');
const navTrailingItems = document.getElementsByClassName('nav-trailing-items').item(0);
const nav = document.getElementById('nav');

navMenuButton.addEventListener('click', () => {
    navTrailingItems.classList.toggle('open');
})
window.addEventListener('resize', () => {
    if(window.innerWidth > 650 && navTrailingItems.classList.contains('open')) {
        navTrailingItems.classList.remove('open')
    }
})

nav.addEventListener('click', () => {
    console.log('click')
    nav.classList.toggle('vertical')
})