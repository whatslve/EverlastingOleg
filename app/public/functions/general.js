//Здесь распологаются основные функции игры

//Функция getRandom позволяет сгенерировать радномное число
//от min и max значения например "var random = getRandom(1,10);"
var getRandom = function(min, max) {
	return Math.random() * (max-min) + min;
};