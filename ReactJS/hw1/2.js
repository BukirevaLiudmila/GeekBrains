function calculateArea(nameFigure, param1, param2) {
	let area = 0; // площадь
	switch (nameFigure) {
		case 'квадрат':
			area = param1 * param1;
			return {area, figure: nameFigure, input: {param1}};
		case 'прямоугольник':
			area = param1 * param2;
			return {area, figure: nameFigure, input: {param1, param2}};
		case 'треугольник':
			area = 0.5 * param1 * param2;
			return {area, figure: nameFigure, input: {param1, param2}};
		default:
			console.log('фигура не задана');
			return {};
	}
}

console.log(calculateArea('квадрат', 3)); // сторона
console.log(calculateArea('прямоугольник', 4, 6)); // две стороны
console.log(calculateArea('треугольник', 5, 8)); // высота, основание
console.log(calculateArea(5, 8));