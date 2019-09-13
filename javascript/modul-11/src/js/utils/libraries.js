import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

import { NOTIFICATION_MESSAGES } from './constants';

MicroModal.init();
const notyf = new Notyf();

const closeEditor = () => {
  MicroModal.close('note-editor-modal');
};
const openEditor = () => {
  MicroModal.show('note-editor-modal');
};

const notificationAdded = (msg) => {
  const message = msg || NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS;
  notyf.success(message);
};
const notificationDeleted = (msg) => {
  const message = msg || NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS;
  notyf.success(message);
};
const notificationError = (msg) => {
  const message = msg || NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY;
  notyf.error(message);
};

export {
  closeEditor, openEditor, notificationAdded, notificationDeleted, notificationError,
};
