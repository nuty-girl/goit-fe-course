/* eslint-disable no-unused-vars */

/* eslint-disable no-underscore-dangle */
import * as api from '../../services/api';

export default class Notepad {
  constructor() {
    this._notes = [];
  }

  get notes() {
    return api.getNotes().then((notes) => {
      this._notes = notes;
      return this._notes;
    });
  }

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  }

  saveNote(note) {
    return api.saveNote(note).then((savedNote) => {
      this._notes.push(savedNote);
      return savedNote;
    });
  }

  deleteNote(id) {
    return api.deleteNote(id).then(() => {
      this._notes = this._notes.filter(note => note.id !== id);
    });
  }

  updateNoteContent(id, updatedContent) {
    return api.updateNote(id, updatedContent).then((updatedNote) => {
      console.log(updatedNote);
      const note = Object.assign(this.findNoteById(id), updatedNote);
      return note;
    });
  }

  updateNotePriority(id, priority) {
    return api.updateNote(id, priority).then((updatedNote) => {
      const note = Object.assign(this.findNoteById(id), updatedNote);
      return note;
    });
  }

  filterNotesByQuery(query) {
    return this._notes.filter(
      note => note.title.toLowerCase().includes(query.toLowerCase())
        || note.body.toLowerCase().includes(query.toLowerCase()),
    );
  }

  filterNotesByPriority(priority) {
    return this._notes.filter(note => note.priority === priority);
  }
}
