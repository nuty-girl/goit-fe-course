/* eslint-disable no-alert */
/* eslint-disable no-undef */
function addNote(event) {
  event.preventDefault();
  if (refs.title.value.length === 0 || refs.body.value.length === 0) {
    alert('Необходимо заполнить все поля!');
    return;
  }
  const note = {
    id: generateUniqueId(),
    title: refs.title.value,
    body: refs.body.value,
  };

  notepad.saveNote(note);
  event.target.reset();
  addListItem(refs.list, note);
}

refs.form.addEventListener('submit', addNote);
