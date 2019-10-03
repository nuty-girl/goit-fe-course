/* eslint-disable no-use-before-define */
import refreshList from './view';
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

const state = { note: null };

function openModalEditor(event) {
  event.preventDefault();
  openEditor();
}

function updateData() {
  const title = refs.title.value;
  const body = refs.body.value;
  state.note.title = title;
  state.note.body = body;
  const { id } = state.note;
  notepad.updateNoteContent(id, { title, body });
  refs.title.value = '';
  refs.body.value = '';
  closeEditor();
  refreshList(notepad.get());
  state.note = null;
}

function saveData(event) {
  event.preventDefault();
  if (refs.title.value.length === 0 || refs.body.value.length === 0) {
    notificationError();
  }
  if (!state.note) {
    const note = {
      title: refs.title.value,
      body: refs.body.value,
      priority: PRIORITY_TYPES.LOW,
    };
    notepad
      .saveNote(note)
      .then(() => notificationAdded())
      .then(() => closeEditor())
      .then(() => notepad.notes)
      .then(notes => refreshList(notes))
      .catch(err => console.error(err));
  }
  if (state.note) {
    updateData();
  }
}

function deleteData({ target }) {
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    const li = target.closest('.note-list__item');
    li.remove();
    const { id } = li.dataset;
    notepad
      .deleteNote(id)
      .then(() => notificationDeleted())
      .catch(err => console.error(err));
  }
  notepad.notes.then(notes => refreshList(notes));
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
    const { title, body } = note;
    refs.title.value = title;
    refs.body.value = body;
    state.note = note;
    openEditor();
  }
}
