'use strict';

// Unit link - https://learn.javascript.ru/task/if-zero-string
// Task 1
if ('0') {
  console.log('Привет'); // '0' в данном случае - true, т.к. 0 в кавычках принимает тип string
}

// Unit link - https://learn.javascript.ru/task/check-standard
// Task 2
var JSNname = prompt('Каково официальное название JavaScript?');

if (JSNname === 'ECMAScript' || JSNname === 'EcmaScript' || JSNname === 'ecmascript') {
  alert('Good!');
} else {
  alert('Не знаете? "ECMAScript"!');
}
// тут вопрос - почему не срабатывает следующие формы записи в conditions?
// 1) if (JSNname === 'ECMAScript' || 'EcmaScript' || 'ecmascript')
// 2) if (JSNname === 'ECMAScript', 'EcmaScript', 'ecmascript')

// Unit link - https://learn.javascript.ru/task/sign
// Task 3
var sign = prompt('Введите сюда что-то:');

if (sign > 0) {
  alert(1);
} else if (sign < 0) {
  alert(-1);
}
else {
  alert(0);
}

// Unit link - https://learn.javascript.ru/task/check-login
// Task 4
var user = 'admin';
var password = 'Чёрный Властелин';

if (user !== prompt('Ты кто?')) {
  alert('Давай досвидания!');
} else if (password === prompt('Введите Ваш пароль:')) {
  alert('Добро пожаловать, Властелин!');
}
else {
  alert('Ты не админ!');
}

// Unit link - https://learn.javascript.ru/task/rewrite-if-question
// Task 5
var a = 1;
var b = 2;
var result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result); // в консоль выводится "Мало", т.к. 2 +1 = 3 и это < 4

// Unit link - https://learn.javascript.ru/task/rewrite-if-else-question
// Task 6
var login = prompt('Укажите Ваш логин')
var message = (login === 'Вася') ? alert('Привет') : (login === 'Директор') ? alert('Здравствуйте') : (login === ' ') ? alert('Нет логина') : alert('');
