import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

export function modal(event) {
  const img = event.target;
  if (img.nodeName !== 'IMG') {
    return;
  }
  const imgUrl = img.dataset.source;
  const instance = basicLightbox.create(`<img src="${imgUrl}">`);
  instance.show();
}
