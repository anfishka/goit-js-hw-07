import { galleryItems } from './gallery-items.js';
// Change code below this line

let container = document.querySelector(".gallery");
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr)
{
    return arr
    .map(
    ({preview, original, description}) => `<li class="gallery-item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
    </li>`
)
.join("");
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData:"alt",
    captionDelay:250,
    elements: "gallery a",
});

container.addEventListener("click", (event) => {
    event.preventDefault();
    lightbox.open();
})
