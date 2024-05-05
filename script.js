document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const burguer = document.getElementById('burguer');

    burguer.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});