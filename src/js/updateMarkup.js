import galleryTemp from '../templates/gallery.hbs';
import {refs} from './refs';

export function updateMarkup(pictures) {
  if (!pictures) return;
  const markup = galleryTemp(pictures);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

