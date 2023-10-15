import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listImg = document.querySelector(".gallery");
const imgMarkup = createImgList(galleryItems);
listImg.insertAdjacentHTML("beforeend", imgMarkup);

function createImgList(images) {
  return images
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

listImg.addEventListener("click", openModalImg);

function openModalImg(event) {
  event.preventDefault();
  const target = event.target;

  if (target.nodeName !== "IMG") {
    return;
  }

  const originalImageURL = target.src;
  const description = target.alt;

  const instance = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });

  instance.open();
}
