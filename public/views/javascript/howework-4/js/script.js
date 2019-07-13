'use strict';

// Unit link - https://learn.javascript.ru/while-for
// Task 1
var i = 3;
while (i) {
  console.log(i -= 1);
}
// пока условие true - выполняется тело цикла. На первом круге i = 3, в консоль мы выводим 3 - 1 = 2. На втором круге в консоль выводим 2 - 1 = 1. На третьем круге выводим 1 - 1 = 0. Затем i уже равен нулю и цикл прекращает выполняться.

// Task 2
// Префиксный вариант
var i = 0;
while (++i < 5) {
  console.log(i);
}
// вариант с "++i" сразу увеличивает i на 1, а затем происходит сравнение с 5. Т.е. выведутся в консоль значения: 1, 2, 3, 4. После того как выведется значение 4 следующий цикл уже не сработает т.к. (5 < 5) - false.

// Постфиксный вариант
var i = 0;
while (i++ < 5) {
  console.log(i);
}
// Здесь немного другая ситуация. Сразу происходит сравнение i с 5, затем перезаписывается новое значение i, увеличенное на 1 и выводится в консоль. В итоге в консоль выведется: 1, 2, 3, 4, 5. После этого цикл уже не сработает, т.к. 5 < 5 - false.

// Task 3
// Постфиксный вариант
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// Префиксный вариант
for (var i = 0; i < 5; ++i) {
  console.log(i);
}
// И в первом и во втором вариантах в консоль выведутся одинаковые значения i: 0, 1, 2, 3, 4.
// Если честно то не очень понятно почему в префиксном варианте i не увеличивается до вывода в консоль...

// Task 4
for (i = 2; i <= 10; i += 2) {
  console.log(i)
}
// Оператор деления с остатком не использовал, т.к. здесь и так все просто и очевидно

// Task 5
for (var i = 0; i < 3; i++) {
  console.log("номер " + i + "!");
}

var i = 0;
while (i < 3) {
  console.log("номер " + i + "!");
  i += 1;
}

// Task 6
do {
  var i = prompt('Введите число больше 100', '0');
} while (i <= 100 && i !== null);

// Task 7
for (var i = 2; i <= 10; i += 1) {
  if (i === 2 || i % 2 !== 0 && i !== 9) {
    console.log(i)
  }
}
// Если честно то я не понял того решения что на сайте описано... Понимаю что сделал через "костыль", но не понял как по-другому сделать.

// Unit link - https://learn.javascript.ru/switch
// Task 1
var browser = prompt('Укажите Ваш браузер:', '');
if (browser === 'IE') {
  console.log('IE сойдет');
} else if (browser === 'Chrome', browser === 'Firefox', browser === 'Safari', browser === 'Opera') {
  console.log('Эти браузеры норм');
} else {
  console.log('Надеемся, что в Вашем браузере все будет ок...');
}

// Task 2
var a = prompt('Введите значение а от 0 до 3', '')
switch(a) {
  case '0':
    console.log(0);
    break;
  case '1':
    console.log(1);
    break;
  case '2':
  case '3':
    console.log(2, 3);
    break;
}

// Unit link - https://learn.javascript.ru/function-basics
// Task 1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Родители разрешили?');
}
// обе функции отработают одинаково, else писать не обязательно

// Task 2
// Вариант с оператором "||"
function checkAge(age) {
  var message = (age >= 18) || confirm('Родители разрешили?');
  return message;
}

// Вариант с оператором "?"
function checkAge(age) {
  var message = (age >= 18) ? true : confirm('Родители разрешили?');
  return message;
}

// Task 3
function showMinNumber(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

// или вот такой вариант с использованием тернарного оператора, что будет короче:
function showMinNumber(a, b) {
  return (a > b) ? b : a;
}
console.log(showMinNumber(32, 23))

// Task 4
function pow(x, n) {
  var result = x;
  for (i = 1; i < n; i += 1) {
    result *= x;
  }
  return result;
}

  var x = prompt('Введите значение x:', '');
  var n = prompt('Введите значение n:', '');

  if (n < 1) {
    console.log('Степень ' + n + ' не поддерживается, укажите число от 1 и больше.');
  } else {
    console.log(pow(x, n));
}

// или так:
function pow(x, n) {
  var x = prompt('Введите значение x:', '');
  var n = prompt('Введите значение n:', '');
  return Math.pow(x, n);
}
console.log(pow());
