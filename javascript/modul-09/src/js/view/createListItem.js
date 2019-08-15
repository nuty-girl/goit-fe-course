function setElem(tagName, className) {
    const elem = document.createElement(tagName);
    elem.classList.add(className);
    return elem;
}
  
function createActionButton(action, text) {
    const button = setElem('button', 'action');
    button.dataset.action = action;
    const icon = setElem('i', 'material-icons');
    icon.classList.add('action__icon');
    icon.textContent = text;
    button.appendChild(icon);
    return button;
}
  
function createNoteContent(title, body) {
    const noteContent = setElem('div', 'note__content');
    const noteTitle = setElem('h2', 'note__title');
    noteTitle.textContent = title;
    const noteBody = setElem('p', 'note__body');
    noteBody.textContent = body;
    noteContent.append(noteTitle, noteBody);
    return noteContent;
}
  
function createNoteFooter(priority) {
    const noteFooter = setElem('footer', 'note__footer');
    const noteSection1 = setElem('section', 'note_section');
    const noteSection2 = setElem('section', 'note_section');
    const span = setElem('span', 'note__priority');
    span.textContent = `Priority: ${priority}`;
    const buttonDown = createActionButton(
      NOTE_ACTIONS.DECREASE_PRIORITY,
      ICON_TYPES.ARROW_DOWN,
    );
    const buttonUp = createActionButton(
      NOTE_ACTIONS.INCREASE_PRIORITY,
      ICON_TYPES.ARROW_UP,
    );
    noteSection1.append(buttonDown, buttonUp);
    noteSection2.append(
      createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT),
      createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE),
    );
    noteFooter.append(noteSection1, noteSection2);
    return noteFooter;
}
  
function createListItem({
    id, title, body, priority,
  }) {
    const listItem = setElem('li', 'note-list__item');
    listItem.dataset.id = id;
    const note = setElem('div', 'note');
    note.append(createNoteContent(title, body), createNoteFooter(priority));
    listItem.append(note);
    return listItem;
}
  