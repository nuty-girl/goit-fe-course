/* eslint-disable no-undef */
import removeListItem from '../view/removeListItem';

function deleteNote(e) {
  e.preventDefault();
  const { target } = e;
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    removeListItem({ target });
  }
}

export default deleteNote;
