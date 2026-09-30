const date = new Date()
const year = date.getFullYear()

const footer = document.querySelector("footer p")
footer.textContent = "copyleft " + year

const images = document.querySelectorAll('.card img');

images.forEach((image) => {
    image.addEventListener('click', () => {
        window.open(image.src, '_blank');
    });
});