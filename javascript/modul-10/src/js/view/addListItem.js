import createListItem from './createListItem';

function addListItem(listRef, note) {
  listRef.append(createListItem(note));
}

export default addListItem;
