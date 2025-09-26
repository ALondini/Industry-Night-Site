const hamButton = document.querySelector('.hamburger');
const menuList = document.querySelector('#hamburger-list');

function toggleMenu() {
    menuList.classList.toggle('active');
}

hamButton.addEventListener('click', toggleMenu);