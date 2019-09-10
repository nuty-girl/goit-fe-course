/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
export const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

export const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

export const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

export const refs = {
  list: document.querySelector('.note-list'),
  form: document.querySelector('.note-editor'),
  title: document.querySelector('input[name="note_title"]'),
  body: document.querySelector('textarea[name="note_body"]'),
  search: document.querySelector('.search-form'),
};
