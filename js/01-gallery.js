import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>
    `
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imgSource = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<div class="modal">
<img src="${imgSource}">
</div>
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeModalOnEscape);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModalOnEscape);
      },
    }
  );
  instance.show();

  function closeModalOnEscape(event) {
    if (event.keyCode == 27) {
      instance.close();
    }
  }
}
