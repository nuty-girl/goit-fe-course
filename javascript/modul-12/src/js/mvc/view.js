import Handlebars from 'handlebars';

import template from '../templates/note';
import { notepad } from './model';
import refs from '../utils/refs';
import { loadStorage, saveStorage } from '../storage';

export const refreshListStorage = () => {
  const notes = loadStorage('hw');
  const htmlNotesList = Handlebars.compile(template)({ notes });
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('afterbegin', htmlNotesList);
  saveStorage('hw', notes);
};

export const refreshList = (data) => {
  const notes = data || notepad.notes;
  const htmlNotesList = Handlebars.compile(template)({ notes });
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('afterbegin', htmlNotesList);
};
