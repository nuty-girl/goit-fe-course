import Handlebars from 'handlebars';

import template from '../templates/note';
import { notepad } from './model';
import refs from '../utils/refs';

// eslint-disable-next-line import/prefer-default-export
const refreshList = (data) => {
  const notes = data || notepad.notes;
  const htmlNotesList = Handlebars.compile(template)({ notes });
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('afterbegin', htmlNotesList);
};

export default refreshList;
