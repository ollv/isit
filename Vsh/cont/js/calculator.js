$(document).ready(function() { // Ждём загрузки страницы	   
	
	$("input[name=send]").click( function () { // Событие нажатия на кнопку "Расчёт"
		var action = $("select[name=action]").val(); // Получаем значение действия, которое нужно выполнить
		var first = $("input[name=first]").val() * 1; // Переменная первого числа
		var second = $("input[name=second]").val() * 1; // Переменная второго числа
		var result; // Переменная результата
		if (action == '+') { // Если действие - сложение
			result = first + second; //  складываем
		}
		else if (action == '-'){ // Если действие вычитание
			result = first - second; // вычитаем
		}
		else if (action == '*'){ // Если действие умножение
			result = first * second; // умножаем
		}
		else if (action == '/'){ // Если действие деления
			result = first / second; // делим
		}
		$("input[name=result]").val(result); // записываем результат
	});
});