/* eslint-disable no-undef */
import notepad from '../app';
import renderListItems from '../view/renderListItems';
import { refs } from '../utils/constants';

function filterNotes(event) {
  event.preventDefault();

  const input = document.querySelector('.search-form__input');
  const query = input.value;

  if (query !== '') {
    const filteredNotes = notepad.filterNotesByQuery(query);
    renderListItems(refs.list, filteredNotes);
  }
}

export default filterNotes;
