/* /////1
const name = 'Генератор защитного поля';
let price = 1000;

price = '2000';
console.log(`Выбран «${name}», цена за штуку ${price}`);

/////2
const day = 17;
const month = 10;
const year = 2048;
let date = `${day}\\${month}\\${year}`;
const message = `"Доброе утро, cегодня ${date}, за бортом отличная погода!"`;
console.log(date); // 17\10\2048
console.log(message);

////4
const correctPassword = 'jqueryismyjam';

const input = prompt('Введите пароль доступа');
if (input === null) {
  alert('Ожидаю ввода пароля');
} else if (input === correctPassword) {
  alert('Доступ в секретный бункер разрешен!');
} else if (input !== correctPassword) {
  alert('Активирована система защиты!');
}

////5
const total = 100;
const ordered = 90;
if (ordered > total) {
  alert('На складе недостаточно твоаров!');
} else if (ordered === total) {
  alert('Вы забираете весь товар cо склада!');
} else if (ordered < total) {
  alert('Заказ оформлен, с вами свяжется менеджер');
}

////
 */
