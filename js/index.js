const bar = document.getElementById('bar');
const closeBtn = document.getElementById('close');
const nav = document.getElementById('nav-items');
const html = document.querySelector("html");
const listItems = nav.querySelectorAll('li');
const mainImage = document.getElementById('main-img');
const smallImages = document.querySelectorAll('.small-img');

smallImages.forEach(img => {
    img.addEventListener('click',() => {
        mainImage.src = img.src;
    });
});

bar.addEventListener('click', () => {
    nav.classList.add('active')
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});

html.addEventListener("click", function (e) {
    if (e.target !== bar && e.target !== nav)
        nav.classList.remove("active");
});

const products = document.querySelectorAll('.prod');
products.forEach(product => {
    product.addEventListener('click',() => window.location.href = 'sProduct.html');
});