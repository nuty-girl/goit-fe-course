/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

function removeListItem({ target }) {
  const li = target.closest('.note-list__item');
  li.remove();
}
export default removeListItem;
