const menuOpen = document.getElementById('open-menu');
const navigation = document.querySelector('.main-nav');
const menuExit = document.getElementById('close-menu');
const title = document.querySelector('.title');
const header = document.querySelector('.header');
const navList = document.querySelector('.nav-list');
const sections = document.querySelectorAll('.boxes');
const wowImg = document.getElementById('wow-img');
const starWarsImg = document.getElementById('sw-img');

menuOpen.addEventListener(('click'), () =>  {
    navigation.style.display = 'flex';
    navigation.style.flexDirection = 'column';
    navigation.style.width = '95%';
    navList.style.listStyleType = 'none';
    header.style.display = 'flex';
    header.style.flexDirection = 'column';
    menuOpen.style.display = 'none';
});

menuExit.addEventListener(('click'), () => {
    navigation.style.display = 'none';
    menuOpen.style.display = 'initial';
});

const btnFront = document.getElementById('btn-front');
const btnBack = document.getElementById('btn-back');
const sectionImg = document.querySelectorAll('.box-img');

//want to create hover animation to turn/open button to allow for selection from recipes list.

btnFront.addEventListener('click', () => {
    btnFront.style.transform = 'rotateY(90deg)';
    btnBack.style.display = 'flex';
    btnBack.style.flexDirection = 'column';
    btnBack.style.gap = '1em';
    btnFront.style.display = 'none';
});