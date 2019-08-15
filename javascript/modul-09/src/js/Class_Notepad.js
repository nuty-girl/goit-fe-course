'use strict';

class Notepad {
  // static priority = {
  //   LOW: 0,
  //   NORMAL: 1,
  //   HIGH: 2,
  // };
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
    if (note.priority) {
      this._notes.push(note);
    } else {
      note.priority = PRIORITY_TYPES.LOW;
      this._notes.push(note);
    }
    return note;
  }
  deleteNote(id) {
    return this._notes.filter(note => note.id !== id);
  }
  updateNoteContent = function(id, updatedContent) {
    let note = Object.assign(this.findNoteById(id), updatedContent);
    return note;
  };
  updateNotePriority = function(id, priority) {
    let note = this.findNoteById(id);
    note.priority = priority;
    return note;
  };
  filterNotesByQuery = function(query) {
    return this._notes.filter(
      note =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
    );
  };
  filterNotesByPriority = function(priority) {
    return this._notes.filter(note => note.priority === priority);
  };
}
