/* eslint-disable no-undef */
import removeListItem from '../view/removeListItem';

function deleteNote(event) {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    removeListItem();
  }
}

export default deleteNote;
