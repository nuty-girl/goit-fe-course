const baseURL = 'http://localhost:3000/notes';

export function getNotes() {
  return fetch(baseURL)
    .then(response => response.json())
    .catch(console.error());
}

export function getNoteById(id) {
  return fetch(`${baseURL}/${id}`)
    .then(response => response.json())
    .then(console.log)
    .catch(console.error());
}

export function deleteNote(id) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${baseURL}/${id}`, options)
    .then(response => response.json())
    .then(console.log)
    .catch(console.error());
}

export function saveNote(data) {
  const body = JSON.stringify(data);
  const options = {
    method: 'POST',
    body,
    headers: {
      'Content-type': 'application/json',
    },
  };
  return fetch(baseURL, options)
    .then(response => response.json())
    .then(console.log)
    .catch(console.error());
}

export function updateNote(id, data) {
  const body = JSON.stringify(data);
  const options = {
    method: 'PATCH',
    body,
    headers: {
      'Content-type': 'application/json',
    },
  };
  return fetch(`${baseURL}/${id}`, options)
    .then(response => response.json())
    .then(console.log)
    .catch(console.error());
}
