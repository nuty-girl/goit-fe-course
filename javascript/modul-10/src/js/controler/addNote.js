/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import shortid from 'shortid';
import addListItem from '../view/addListItem';
import { refs, PRIORITY_TYPES } from '../utils/constants';
import notepad from '../app';

export default function addNote(event) {
  event.preventDefault();
  if (refs.title.value.length === 0 || refs.body.value.length === 0) {
    alert('Необходимо заполнить все поля!');
    return;
  }
  const note = {
    id: shortid.generate(),
    title: refs.title.value,
    body: refs.body.value,
    priority: PRIORITY_TYPES.LOW,
  };

  notepad.saveNote(note);
  event.target.reset();
  addListItem(refs.list, note);
}
