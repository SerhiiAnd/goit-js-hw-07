import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const listImages = document.querySelector(".gallery");
console.log(listImages);

const imagesMarkup = createImagesListMarkup(galleryItems);
listImages.insertAdjacentHTML("beforeend", imagesMarkup);
listImages.addEventListener("click", onCardsContainerClick);

function createImagesListMarkup(images) {
  return images
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`;
    })
    .join("");
}

listImages.addEventListener("click", onCardsContainerClick);

function onCardsContainerClick(event) {
  event.preventDefault();
  const target = event.target;

  if (target.nodeName !== "IMG") {
    return;
  }

  const originalImageURL = target.dataset.source;
  const description = target.alt;

  const instance = basicLightbox.create(
    `<img src="${originalImageURL}" alt="${description}" />`
  );

  instance.show();
}

// const galleryList = document.querySelector(".gallery");

// function createGalleryItem(item) {
//   const galleryItem = document.createElement("li");
//   galleryItem.classList.add("gallery__item");

//   const galleryLink = document.createElement("a");
//   galleryLink.classList.add("gallery__link");
//   galleryLink.href = item.original;

//   const galleryImage = document.createElement("img");
//   galleryImage.classList.add("gallery__image");
//   galleryImage.src = item.preview;
//   galleryImage.setAttribute("data-source", item.original);
//   galleryImage.alt = item.description;

//   galleryLink.appendChild(galleryImage);
//   galleryItem.appendChild(galleryLink);

//   return galleryItem;
// }

// const galleryItemsElements = galleryItems.map(createGalleryItem);
// galleryList.append(...galleryItemsElements);

// galleryList.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event.target.nodeName === "IMG") {
//     const source = event.target.dataset.source;
//     const alt = event.target.alt;

//     const instance = basicLightbox.create(
//       `<img src="${source}" alt="${alt}" />`
//     );

//     instance.show();
//   }
// });
