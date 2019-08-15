/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const renderListItems = (listRef, notes) => {
  // eslint-disable-next-line no-param-reassign
  listRef.innerHTML = '';
  const listItems = notes.map(note => createListItem(note));
  listRef.append(...listItems);
};
