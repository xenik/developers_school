// Поиск и обработка ошибок

// Упражнение 1 - Повтор

/*Допустим, у вас есть функция primitiveMultiply, которая в
50% случаев перемножает 2 числа, а в остальных
случаях выбрасывает исключение типа
MultiplicatorUnitFailure. Напишите функцию,
обёртывающую эту, и просто вызывающую её до тех пор,
пока не будет получен успешный результат.
Убедитесь, что вы обрабатываете только нужные вам
исключения.*/


function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
	if (Math.random() < 0.5)
		return a * b;
	else throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
	for(;;) {
		try {
			return primitiveMultiply(a, b);
		} catch (error) {
			if(!(error instanceof MultiplicatorUnitFailure))
				throw error;
		}
	}
}

console.log(reliableMultiply(8, 8));


// Упражнение 2 - Запертая коробка 

/*Рассмотрим такой, достаточно надуманный, объект:

Это коробочка с замком. Внутри лежит массив, но до него
можно добраться только, когда коробка не заперта.
Напрямую обращаться к свойству _content нельзя.
Напишите функцию withBoxUnlocked, принимающую в
качестве аргумента функцию, которая отпирает коробку,
выполняет функцию, и затем обязательно запирает
коробку снова перед выходом – неважно, выполнилась ли
переданная функция правильно, или она выбросила
исключение.*/

var box = {
	locked: true,
	unlock: function() { this.locked = false; },
	lock: function() { this.locked = true; },
	_content: [],
	get content() {
		if (this.locked) throw new Error("Заперто!");
		return this._content;
	}
};

function withBoxUnlocked(body) {
	var locked = box.locked;
	if (!locked)
		return body();

	box.unlock();
	try {
		return body();
	} finally {
		box.lock();
	}
}

withBoxUnlocked(function() {
	box.content.push("золотишко");
});

try {
	withBoxUnlocked(function() {
		throw new Error("Пираты на горизонте! Отмена!");
	});
} catch (e) {
	console.log("Произошла ошибка:", e);
}

console.log(box.locked);
