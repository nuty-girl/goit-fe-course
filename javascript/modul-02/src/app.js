'use strict';

let input;

const numbers = [];

let number;

do {
  input = prompt('Введите число');
  number = Number.parseInt(input);
  if (input === null) {
    break;
  } else if (isNaN(number)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(number);
  }
} while (true);

console.log(numbers);

let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(total);

/////////////////////////////////////

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userInput;

while (userInput !== null) {
  userInput = prompt('Введите Ваш пароль:');
  attemptsLeft -= 1;
  if (passwords.includes(userInput)) {
    alert('Добро пожаловать!');
    break;
  } else if (passwords.includes(userInput) === false && attemptsLeft !== 0) {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  } else if (attemptsLeft === 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  }
}
