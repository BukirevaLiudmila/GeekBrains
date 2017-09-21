var a = Math.round(Math.random() * 10 - 5),
    b = Math.round(Math.random() * 10 - 5);

console.log('a = ' + a);
console.log('b = ' + b);
mathOperation(a, b, 'addition');
mathOperation(a, b, 'subtraction');
mathOperation(a, b, 'multiplication');
mathOperation(a, b, 'division');
mathOperation(a, b, 'Addition');

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'addition':
      console.log('Сумма: ' + addition(arg1, arg2));
      break;
    case 'subtraction':
      console.log('Разность: ' + subtraction(arg1, arg2));
      break;
    case 'multiplication':
      console.log('Произведение: ' + multiplication(arg1, arg2));
      break;
    case 'division':
      console.log('Частное: ' + division(arg1, arg2));
      break;
    default:
      console.log('Не предусмотрена функция с именем ' + operation);
  }
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}
