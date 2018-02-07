class Human {
	constructor(name, age, dateOfBirth) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}

	displayInfo() {
		console.log(this.name + ', ' + this.age + ', ' + this.dateOfBirth);
	}
}

class Employee extends Human {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth);
		this.salary = salary;
		this.department = department;
	}

	displayInfo() {
		super.displayInfo();
		console.log(this.salary + ', ' + this.department);
	}
}

class Manager extends Employee {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth, salary, department);
		this.developers = [];
	}

	displayInfo() {
		super.displayInfo();
		console.log(this.developers);
	}

	addDeveloper(newDeveloper) {
		this.developers.push(newDeveloper);
	}

	deleteDeveloper(nameOfDeveloper) {
		this.developers.forEach((item, i) => {
			if (item.name === nameOfDeveloper) {
				this.developers.splice(i, 1);
			}
		});
	}
}

class Developer extends Employee {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth, salary, department);
		this.manager = {};
	}

	displayInfo() {
		super.displayInfo();
		console.log(this.manager);
	}

	changeManager(newManager) {
		this.manager = newManager;
	}
}

// создаем разработчиков
console.log('Разработчики:');
let dev1 = new Developer('Vasya', 28, '12.08.1989', 80000, 'IT_department');
dev1.displayInfo();
let dev2 = new Developer('Misha', 30, '12.08.1987', 90000, 'IT_department');
dev2.displayInfo();

// создаем менеджеров
console.log('Менеджеры:');
let man1 = new Manager('Kolya', 24, '18.10.1993', 70000, 'manage_depart');
man1.displayInfo();
let man2 = new Manager('Dasha', 29, '18.10.1988', 70000, 'manage_depart');
man2.displayInfo();

//добавляем разработчиков менеджеру
console.log('Менеджер_1:');
man1.addDeveloper(dev1);
man1.addDeveloper(dev2);
man1.displayInfo();

//удаляем разработчика у менежера
console.log('Менеджер_1:');
man1.deleteDeveloper('Misha');
man1.displayInfo();

//назначаем разработчику менеджера
console.log('Разработчик_2:');
dev2.changeManager(man2);
dev2.displayInfo();
