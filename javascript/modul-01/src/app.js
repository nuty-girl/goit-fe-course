'use strict';

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
const userInput = prompt('Введите Ваш пароль');
if (userInput === null) {
  message = 'Отмененно пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

///////--------задание 2

const credits = 23580;
let countDroid;
const pricePerDroid = 3000;
let totalPrice;
const customerInput = prompt(
  'Укажите количество дроидов, которое Вы хотите купить',
);
if (customerInput === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * customerInput;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${customerInput} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
  }
}

// ///------задание 3

const input = prompt('Укажите страну для доставки товара:');
if (input === null) {
  console.log('Отменено пользователем!');
} else {
  const priceChina = 100;
  const priceSouthAmerica = 250;
  const priceAustralia = 170;
  const priceIndia = 80;
  const priceJamaica = 120;

  switch (input.toLowerCase()) {
    case 'китай':
      console.log(`Доставка в китай будет стоить ${priceChina}  кредитов`);
      break;
    case 'южная америка':
      console.log(
        `Доставка в южную америку будет стоить ${priceSouthAmerica}  кредитов`,
      );
      break;
    case 'австралия':
      console.log(
        `Доставка в австралию будет стоить ${priceAustralia}  кредитов`,
      );
      break;
    case 'индия':
      console.log(`Доставка в индию будет стоить ${priceIndia}  кредитов`);
      break;
    case 'ямайка':
      console.log(`Доставка в ямайку будет стоить ${priceJamaica}  кредитов`);
      break;
    default:
      console.log('В вашей стране доставка не доступна');
  }
}
