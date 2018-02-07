function* questionnaire() {
	let name = prompt('Как тебя зовут?', 'Имя');
	yield name;

	let age = prompt('Сколько тебе лет?', 'Возраст');
	yield age;

	let hobby = prompt('Чем ты увлекаешься?', 'Хобби');
	yield {name, age, hobby};
}

let myQuestionnaire = questionnaire();

let name = myQuestionnaire.next();
let age = myQuestionnaire.next();
let hobby = myQuestionnaire.next();
console.log(hobby);
