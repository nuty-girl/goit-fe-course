/* eslint-disable no-undef */
function deleteNote({ target }) {
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    removeListItem();
  }
}

refs.list.addEventListener('click', deleteNote);
