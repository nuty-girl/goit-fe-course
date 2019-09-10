import notepad from '../app';

function editNote(event) {
  event.preventDefault();
  const { target } = event;
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
  }
}

export default editNote;
