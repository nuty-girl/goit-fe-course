'use strict';

let input;

const numbers = [];

do {
  input = prompt('Введите число');
  if (input === null) {
    break;
  } else if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(Number(input));
  }
} while (true);

let total = 0;
if (numbers.length >= 1) {
  for (let number of numbers) {
    total += number;
  }
}
console.log(total);

/////////////////////////////////////

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userInput;

while (attemptsLeft > 0) {
  userInput = prompt('Введите Ваш пароль:');
  attemptsLeft -= 1;
  if (passwords.includes(userInput)) {
    alert('Добро пожаловать!');
    break;
  } else if (userInput === null) {
    console.log('Отменено пользователем!');
    break;
  } else if (attemptsLeft === 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  } else {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  }
}
