import { notepad } from './mvc/model';

/* eslint-disable indent */
// eslint-disable-next-line consistent-return
const hasLocalStorage = () => {
  try {
    // eslint-disable-next-line quotes
    const key = '__some_random_key_you_are_not_going_to_use__';
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

export const loadStorage = (key) => {
  if (!hasLocalStorage) return;
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? notepad.notes : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

export const saveStorage = (key, value) => {
  if (!hasLocalStorage) return;
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

const removeStorage = (key) => {
  if (!hasLocalStorage) return;
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};
