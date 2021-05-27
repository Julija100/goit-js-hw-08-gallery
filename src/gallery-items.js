const pictures = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
//Создание и рендер разметки по массиву данных и предоставленному шаблону.//

const ulElements = document.querySelector(".js-gallery");
const resultHtml = pictures.map(({ preview, original, description }) => {
  return `
   <li class="gallery__item">
   <a
     class="gallery__link"
     href="${original}"
   >
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </li>
  `;
});
console.log(resultHtml);

ulElements.insertAdjacentHTML("beforeend", resultHtml.join(""));

//Открытие модального окна по клику на элементе галереи.//

const openModal = (imageSrc) => {
  document.querySelector(".lightbox").classList.add("is-open");
  document.querySelector(".lightbox__image").src = imageSrc;
};

//Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.//

const ulContainerClick = (event) => {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
  openModal(event.target.getAttribute("data-source"));
};

ulElements.addEventListener("click", ulContainerClick);

//Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].//

const closeModal = () => {
  document.querySelector(".lightbox").classList.remove("is-open");
};

const closeBtn = document.querySelector('[data-action="close-lightbox"]');

closeBtn.addEventListener("click", closeModal);

//Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,
//чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.//
