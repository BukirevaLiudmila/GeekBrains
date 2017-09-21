var a = Math.round(Math.random() * 40 - 20),
    b = Math.round(Math.random() * 40 - 20);

console.log('a = ' + a);
console.log('b = ' + b);
if (a >= 0 && b >= 0) {
  console.log('Разность: ' + (a - b));
} else if (a < 0 && b < 0) {
  console.log('Произведение: ' + (a * b));
} else console.log('Сумма: ' + (a + b));
