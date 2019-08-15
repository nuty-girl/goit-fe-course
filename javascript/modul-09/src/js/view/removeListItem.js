/* eslint-disable no-unused-vars */
/* eslint-disable indent */
function removeListItem() {
  const btn = document.querySelector('button[data-action="delete-note"]');
  const li = btn.closest('.note-list__item');
  const { id } = li.dataset;
  li.remove();
  // eslint-disable-next-line no-undef
  notepad.deleteNote(id);
}
