/* eslint-disable no-underscore-dangle */

export default class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  }

  saveNote(note) {
    this._notes.push(note);
    return note;
  }

  deleteNote(id) {
    this._notes = this._notes.filter(note => note.id !== id);
    return this._notes;
  }

  updateNoteContent(id, updatedContent) {
    const note = Object.assign(this.findNoteById(id), updatedContent);
    return note;
  }

  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    note.priority = priority;
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
