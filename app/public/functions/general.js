//Здесь распологаются основные функции игры
	//Функция getRandom позволяет сгенерировать радномное число
	//от min и max значения например "var random = getRandom(1,10);"
var getRandom = function(min, max) {
	return Math.random() * (max-min) + min;
};
//функция сохранения в статуса игры в куки
var saveGame = function(){
	setCookie('gameStatus',JSON.stringify(state));
};
//функция хзагрузки статуса игры из куки
var loadGame = function(){
	state = JSON.parse(getCookie('gameStatus'));
};
//функция для выборки всех элементов на странице по названию класса
var g = function(className){
	return document.querySelectorAll(className);
};
//функция для добавления класса к html элементу
var addClass = function(object,className){
	if(object instanceof NodeList){
		for (var i = 0; i < object.length; i++){
			addClass(object[i],className);
			};
}else{
	var objectClass = object.getAttribute('class');
	var objectArray = objectClass.split(" ");
	for (var i = 0; i < objectArray.length; i++){
		if (objectArray[i] === className){
			return;
		};
	};
	objectArray.push(className);
	object.setAttribute('class',objectArray.join(" "));
}
};
//Функция для удаления класса у html элемента
var deleteClass = function(object,className){
	if(object instanceof NodeList){
		for (var i = 0; i < object.length; i++){
			deleteClass(object[i],className);
			};
}else{
	var objectClass = object.getAttribute('class');
	var objectArray = objectClass.split(" ");
	for (var i = 0; i < objectArray.length; i++){
		if (objectArray[i] === className){
			delete objectArray[i];
		};
	};
	object.setAttribute('class',objectArray.join(" "));
}
};
//Функция добавления обработчика на html элемент
var addListener = function(objects, action, func){
	for(var i = 0; i < objects.length; i++){
		objects[i].addEventListener(action,func);
	};
};
var addHTML = function(object, html){
	for(var i = 0; i < object.length; i++){
		object[i].innerHTML = html;
	};
};
