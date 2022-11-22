const btn = document.querySelector('.btn-toggle');
const nav = document.querySelector('.nav-menu'); 

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
});