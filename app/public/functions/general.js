//Здесь распологаются основные функции игры
	//Функция getRandom позволяет сгенерировать радномное число
	//от min и max значения например "var random = getRandom(1,10);"
var getRandom = function(min, max) {
	return Math.random() * (max-min) + min;
};

var saveGame = function(){
	setCookie('gameStatus',JSON.stringify(state));
};

var loadGame = function(){
	state = JSON.parse(getCookie('gameStatus'));
};
var g = function(className){
	return document.querySelectorAll(className);
};
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
var addListener = function(objects, action, func){
	for(var i = 0; i < objects.length; i++){
		objects[i].addEventListener(action,func);
	};
};
