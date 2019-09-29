import refreshList from './mvc/view';
import './mvc/controller';
import { notepad } from './mvc/model';
// // eslint-disable-next-line import/named

notepad.notes.then(notes => refreshList(notes));
