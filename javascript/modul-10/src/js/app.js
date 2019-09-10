/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import Notepad from './notepad-model';
import renderListItems from './view/renderListItems';
import initialNotes from './initialNotes';
import { refs } from './utils/constants';
import addNote from './controler/addNote';
import deleteNote from './controler/deleteNote';
import editNote from './controler/editNote';
import filterNotes from './controler/filterNotes';

const notepad = new Notepad(initialNotes);

renderListItems(refs.list, notepad.notes);

refs.form.addEventListener('submit', addNote);
refs.list.addEventListener('click', deleteNote);
refs.list.addEventListener('click', editNote);
refs.search.addEventListener('input', filterNotes);

export default notepad;
