/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import notepad from '../app';

// function removeListItem() {
//   const btn = document.querySelector('button[data-action="delete-note"]');
//   const li = btn.closest('.note-list__item');
//   const { id } = li.dataset;
//   notepad.deleteNote({ id });
//   li.remove();
//   // eslint-disable-next-line no-undef
// }

function removeListItem({ target }) {
  const li = target.closest('.note-list__item');
  const { id } = li.dataset;
  notepad.deleteNote(id);
  li.remove();
  // eslint-disable-next-line no-undef
}
export default removeListItem;
