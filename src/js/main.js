
import {refs} from './refs';
import {apiService} from './apiService';
import {modal} from './modal';
import {IO} from './IntersectionObserver';

refs.form.addEventListener('submit', formSubmitHandler);
refs.gallery.addEventListener('click', modal);

function formSubmitHandler(event) {
  event.preventDefault();
  IO.unobserve(refs.sentinel);
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  clearGallery();
  createSentinel();
  apiService.resetPage();
  form.reset();
  IO.observe(refs.sentinel);
}
function clearGallery() {
  refs.gallery.innerHTML = '';
}
function createSentinel() {
  refs.gallery.appendChild(refs.sentinel);
}
