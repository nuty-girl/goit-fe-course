'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(logins, login) {
  return logins.includes(login);
};

const addLogin = function(logins, login) {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  } else if (isLoginUnique(logins, login)) {
    return 'Такой логин уже используется!';
  } else {
    logins.push(login);
    return 'Логин успешно добавлен!';
  }
};

console.log(addLogin(logins, 'Ajax'));
console.log(addLogin(logins, 'robotGoogles'));
console.log(addLogin(logins, 'Zod'));
console.log(addLogin(logins, 'jqueryisextremelyfast'));

// Вызовы функции для проверки
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
