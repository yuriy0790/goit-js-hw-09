// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

const galleryImgMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join('');
listEl.insertAdjacentHTML('beforeend', galleryImgMarkup);

const lightbox = new SimpleLightbox('div.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
