/* eslint-disable no-undef */
function filterNotes(event) {
  event.preventDefault();

  const input = document.querySelector('.search-form__input');
  const query = input.value;

  if (query !== '') {
    const filteredNotes = notepad.filterNotesByQuery(query);
    renderListItems(refs.list, filteredNotes);
  }
}

refs.search.addEventListener('input', filterNotes);
