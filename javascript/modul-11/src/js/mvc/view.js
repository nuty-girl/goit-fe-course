import Handlebars from 'handlebars';

import template from '../templates/note';
import { notepad } from './model';
import refs from '../utils/refs';

const array = notepad.notes;

const refreshList = (data) => {
  const notes = data || array;
  const htmlNotesList = Handlebars.compile(template)({ notes });
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('afterbegin', htmlNotesList);
};

export { refreshList };
