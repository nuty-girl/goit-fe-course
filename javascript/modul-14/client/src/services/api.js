import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { apiError } from '../js/utils/libraries';

axios.defaults.baseURL = 'http://localhost:3000/notes';

export const getNotes = async () => {
  try {
    const response = await axios.get();
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error('Error while requesting ');
  }
};

export const deleteNote = async (id) => {
  try {
    const response = await axios.delete(`/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(apiError());
  }
};

export const saveNote = async (note) => {
  try {
    const response = await axios.post('', note);
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(apiError());
  }
};

export const updateNote = async (id, updatedNote) => {
  try {
    const response = await axios.patch(`/${id}`, updatedNote);
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(apiError());
  }
};
