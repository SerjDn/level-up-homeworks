'use strict';

// Unit link - https://learn.javascript.ru/operators#tasks
// Task 1
var a = 1, b = 1, c, d;

c = ++a; console.log(c); // 2 - т.к. а = 1, затем мы а увеличили на 1 и записали в с
d = b++; console.log(d); // 1 - здесь немного другая ситуация, т.к. b мы положили в d, а только затем увеличили b на 1

c = (2+ ++a); console.log(c); // 5 - а у нас уже был равен 2, мы его увеличили на 1 и прибавили 2
d = (2+ b++); console.log(d); // 4 - b у нас уже был равен 2, мы прибавили еще 2 и записали в d и только после записи мы увеличили b на 1

console.log(a); // 3 - а мы увеличивали 2 раза
console.log(b); // 3 - b мы увеличивали 2 раза

// Unit link - https://learn.javascript.ru/operators#tasks
// Task 2
var a = 2;
var x = 1 + (a *= 2); // a *= 2 это а = а * 2, т.е. то что в скобках у нас равно 4 и +1 равно 5
console.log(x); // 5
// Comments:


// Additional task 1
var a = 2;
var b = 4;
var c = (b += 5) - a++ * b - 3 + (b -= 3 + 1 - --a);
console.log(c);
// Comments:
// 1) начинаем решать уравнение слева направо: (b += 5 => 9)
// 2) теперь мы знаем, что b = 9, выполняем умножение: 2 * 9 = 18
// 3) последняя скобка: 9 - 3 + 1 - 2 = 7
// 4) 9 - 18 - 3 + 7 = -5
