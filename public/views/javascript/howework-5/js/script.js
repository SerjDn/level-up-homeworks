'use strict';

// Unit link - https://learn.javascript.ru/recursion
// Task 1
// 1) Решение с использованием цикла
function sumTo(n) {
  if (n > 0) {
    return n + sumTo(n - 1);
  } else {
    return n;
  }
}

console.log(sumTo(4))