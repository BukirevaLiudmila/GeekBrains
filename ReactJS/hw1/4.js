function* questionnaire() {
	let name = prompt('Как тебя зовут?', 'Имя');
	yield name;

	let age = prompt('Сколько тебе лет?', 'Возраст');
	yield age;

	let hobby = prompt('Чем ты увлекаешься?', 'Хобби');
	return {name, age, hobby};
}

function execute(generator, yieldValue) {
	let next = generator.next(yieldValue);

	if (!next.done) {
		execute(generator, next.value);
	} else {
		console.log(next.value)
	}

}

let myQuestionnaire = questionnaire();
execute(myQuestionnaire);

