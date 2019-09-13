/* eslint-disable no-undef */
import removeListItem from '../view/removeListItem';
import notepad from '../app';

function deleteNote(e) {
  e.preventDefault();
  const { target } = e;
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    removeListItem({ target });
    const { id } = target.closest('.note-list__item').dataset;
    notepad.deleteNote(id);
  }
}

export default deleteNote;
