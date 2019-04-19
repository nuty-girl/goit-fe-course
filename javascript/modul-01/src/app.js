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
alert(message1);*/

//--------задание 2

// const credits = 23580;
// let countDroid;
// const pricePerDroid = 3000;
// let totalPrice;
// const input = prompt('Укажите количество дроидов, которое Вы хотите купить');
// if (input === null) {
//   console.log('Отменено пользователем!');
// } else {
//   totalPrice = pricePerDroid * input;
//   if (totalPrice > credits) {
//     console.log('Недостаточно средств на счету!');
//   } else {
//     console.log(`Вы купили ${input} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
//   }
// }

///------задание 3

let country;
const input = prompt('Укажите страну для доставки товара:');
if (input !== null) {
  country = input.toLowerCase();
}
let price;

switch (country) {
  case 'китай':
    price = 100;
    console.log(`Доставка в ${country} будет стоить ${price}  кредитов`);
    break;
  case 'южная америка':
    price = 250;
    console.log(`Доставка в ${country} будет стоить ${price}  кредитов`);
    break;
  case 'австралия':
    price = 170;
    console.log(`Доставка в ${country} будет стоить ${price}  кредитов`);
    break;
  case 'индия':
    price = 80;
    console.log(`Доставка в ${country} будет стоить ${price}  кредитов`);
    break;
  case 'ямайка':
    price = 120;
    console.log(`Доставка в ${country} будет стоить ${price}  кредитов`);
    break;
  default:
    console.log('В вашей стране доставка не доступна');
}
