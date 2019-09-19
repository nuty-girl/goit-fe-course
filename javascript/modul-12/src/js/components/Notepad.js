/* eslint-disable no-unused-vars */

/* eslint-disable no-underscore-dangle */
class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  get AsyncNotes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._notes);
      }, 100);
    });
  }

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  }

  saveNote(note) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._notes.push(note);
        resolve(note);
      }, 500);
    });
  }

  deleteNote(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._notes = this._notes.filter(note => note.id !== id);
        resolve(this._notes);
      }, 500);
    });
  }

  updateNoteContent(id, updatedContent) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const note = Object.assign(this.findNoteById(id), updatedContent);
        resolve(note);
      }, 100);
    });
  }

  updateNotePriority(id, priority) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const note = this.findNoteById(id);
        note.priority = priority;
        resolve(note);
      }, 100);
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

export default Notepad;
