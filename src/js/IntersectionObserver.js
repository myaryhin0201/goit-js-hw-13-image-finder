import {apiService} from './apiService';
import {updateMarkup} from './updateMarkup';
import {refs} from './refs';
import notification from './notifications';

export const IO = new IntersectionObserver(entries => {
  if (!entries.some(entry => entry.intersectionRatio > 0))return;
  
  apiService
    .fetchGallery()
    .then(gallery => {
      updateMarkup(gallery);
    })
    .then(() => {
      refs.gallery.appendChild(refs.sentinel);
    })
    .catch(err => {
      notification.badRequest(err);
    });
});


