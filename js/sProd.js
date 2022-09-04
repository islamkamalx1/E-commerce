const mainImage = document.getElementById('main-img');
const smallImages = document.querySelectorAll('.small-img');

smallImages.forEach(img => {
    img.addEventListener('click',() => {
        mainImage.src = img.src;
    });
});