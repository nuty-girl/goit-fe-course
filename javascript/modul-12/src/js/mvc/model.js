import INITILAL_NOTES from '../../assets/notes.json';
import Notepad from '../components/Notepad';

const notepad = new Notepad(INITILAL_NOTES);

// eslint-disable-next-line import/prefer-default-export
export { notepad };
