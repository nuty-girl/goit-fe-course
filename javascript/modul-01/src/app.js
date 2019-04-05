'use strict';

/* const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message1;
const input1 = prompt('Введите Ваш пароль');
if (input1 === null) {
  message1 = 'Отмененно пользователем!';
} else if (input1 === ADMIN_PASSWORD) {
  message1 = 'Добро пожаловать!';
} else if (input1 !== ADMIN_PASSWORD) {
  message1 = 'Доступ запрещен, неверный пароль!';
}
alert(message1);

//--------задание 2

const credits = 23580;
let countDroid;
const pricePerDroid = 3000;
let totalPrice;
let message;
const input = prompt('Укажите количество дроидов, которое Вы хотите купить');
if (input === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else {
  totalPrice = pricePerDroid * input;
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
    console.log(message);
  } else {
    let balance;
    balance = credits - totalPrice;
    let resumeMessage = `Вы купили ${input} дроидов, на счету осталось ${balance} кредитов.`;
    alert(resumeMessage);
    //console.log(resumeMessage);
  }
} */

//------задание 3

const country = prompt('Укажите страну для доставки товара:').toLowerCase();
let price;

switch (country) {
  case 'китай':
    price = '100';
    break;
  case 'южная америка':
    price = '250';
    break;
  case 'австралия':
    price = '170';
    break;
  case 'индия':
    price = '80';
    break;
  case 'ямайка':
    price = '120';
    break;
  default:
    console.log('В вашей стране доставка не доступна');
}
const message3 = `Доставка в ${country} будет стоить ${price}  кредитов`;
if (country && price) {
  console.log(message3);
}
