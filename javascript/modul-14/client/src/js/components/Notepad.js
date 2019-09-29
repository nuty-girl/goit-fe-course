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

  async saveNote(note) {
    const savedNote = await api.saveNote(note);
    this._notes.push(savedNote);
    return savedNote;
  }

  async deleteNote(id) {
    await api.deleteNote(id);
    this._notes = this._notes.filter(note => note.id !== id);
  }

  async updateNoteContent(id, updatedContent) {
    const note = Object.assign(this.findNoteById(id), updatedContent);
    const updatedNote = await api.updateNote(id, note);
    console.log(updatedNote);

    return updatedNote;
  }

  // async updateNoteContent(id, updatedContent) {
  //   const updatedNote = await api.updateNote(id, updatedContent);
  //   const note = Object.assign(this.findNoteById(id), updatedNote);

  //   console.log(note);

  //   return note;
  // }

  async updateNotePriority(id, priority) {
    const updatedNote = await api.updateNote(id, priority);
    const note = Object.assign(this.findNoteById(id), updatedNote);
    return note;
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
