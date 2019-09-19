/* eslint-disable no-use-before-define */
import shortid from 'shortid';

import { refreshListStorage, refreshList } from './view';
import { saveStorage } from '../storage';
import refs from '../utils/refs';
import { PRIORITY_TYPES } from '../utils/constants';
import { notepad } from './model';
import {
  openEditor,
  closeEditor,
  notificationAdded,
  notificationDeleted,
  notificationError,
} from '../utils/libraries';

refs.openEditor.addEventListener('click', openModalEditor);
refs.editorSave.addEventListener('click', saveData);
refs.list.addEventListener('click', deleteData);
refs.list.addEventListener('click', editData);
refs.search.addEventListener('input', filterByText);
refs.search.addEventListener('blur', resetSearch);

function openModalEditor(event) {
  event.preventDefault();
  openEditor();
}

function saveData(event) {
  event.preventDefault();
  if (refs.title.value.length === 0 || refs.body.value.length === 0) {
    notificationError();
    return;
  }
  const note = {
    id: shortid.generate(),
    title: refs.title.value,
    body: refs.body.value,
    priority: PRIORITY_TYPES.LOW,
  };
  notepad
    .saveNote(note)
    .then(savedNote => console.log(savedNote))
    .then(() => notepad.notes)
    .then(notes => saveStorage('hw', notes))
    .then(() => console.log(notepad.notes))
    .then(notes => refreshListStorage(notes))
    .catch(err => console.error(err));
  notificationAdded();
  closeEditor();
  event.target.reset();
}

function deleteData({ target }) {
  // state.note = null;
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    const li = target.closest('.note-list__item');
    li.remove();
    const { id } = li.dataset;
    notepad
      .deleteNote(id)
      .then(notes => saveStorage('hw', notes))
      .then(() => notepad.notes)
      .then(notes => refreshListStorage(notes))
      .catch(err => console.error(err));
    notificationDeleted();
  }
}

function filterByText(event) {
  event.preventDefault();
  const { value } = event.target;
  if (value !== '') {
    const filteredNotes = notepad.filterNotesByQuery(value);
    refreshList(filteredNotes);
  }
}

function resetSearch(event) {
  event.preventDefault();
  refs.search.parentNode.reset();
}

function editData({ target }) {
  if (target.dataset.action === 'edit-note' || target.parentNode.dataset.action === 'edit-note') {
    const li = target.closest('.note-list__item');
    const { id } = li.dataset;
    const note = notepad.findNoteById(id);
    const title = li.querySelector('.note__title');
    const body = li.querySelector('.note__body');
    title.setAttribute('contenteditable', true);
    body.setAttribute('contenteditable', true);
    note.title = title.textContent;
    note.body = body.textContent;
    saveStorage('hw', notepad.notes);
  }
}
