/* eslint-disable no-underscore-dangle */
const { getNotes, addNotes, delNotes } = require('../src/api');

class Notepad {
  /*
   * Перенеси свойства и методы конструктора в класс
   *
   * Замени метод getNotes геттером, чтобы можно было обратиться как notepad.notes,
   * для этого создай свойство _notes, в котором храни массив заметок,
   * а геттер notes возвращает значение этого поля
   *
   * Добавь статическое свойство Priority используя ключевое слово static
   */

  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  getNotes() {
    return getNotes().then((notes) => {
      this._notes = notes;
      return this._notes;
    });
  }

  saveNote(note) {
    return addNotes(note).then((data) => {
      this._notes.push(data);
      return data;
    });
    // this._notes.push(note);
    // return note;
  }

  findNoteById(id) {
    return this._notes.find(e => e.id === id);
  }

  deleteNote(id) {
    return delNotes(id).then(() => {
      this.getNotes();
      // this._notes.filter(e => e.id !== id);
      // return this._notes;
    });
    // this._notes = this._notes.filter(e => e.id !== id);
  }

  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    if (note) {
      note.priority = priority;
      return note;
    }
    return undefined;
  }

  updateNoteContent(id, obj) {
    let note = this.findNoteById(id);
    if (note) {
      note = { ...note, ...obj };
      return note;
    }
    return undefined;
  }

  filterNotesByQuery(q) {
    const query = q.toLowerCase();
    return this._notes.filter(
      ({ title, body }) => title.toLowerCase().includes(query) || body.toLowerCase().includes(query)
    );
  }

  filterNotesByPriority(priority) {
    return this._notes.filter(e => e.priority === priority);
  }
}

module.exports = Notepad;
