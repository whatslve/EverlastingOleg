"use strict"
//Главный объект игры с ее статусом
var state = {
    gameState: '.meny',
    stage: 'begin',
    idDialog: '1',
    badBoy: '0',
    trueBoy: '0',
    menyName: '.meny-main'
};
//Проверка на наличие куки, если его нет то создать дефолтное
var cookan = getCookie('gameStatus');
if(cookan == undefined){
  saveGame();
};
//Функция для смены окон
var changeWindow = function(toWindowName){
  deleteClass(g(state.gameState),'show');
  addClass(g(toWindowName),'show');
  addClass(g(state.gameState),'hidden');
  deleteClass(g(toWindowName),'hidden');
  state.gameState = toWindowName;
};
//Функция для смены меню
var changeMeny = function(toMenyName){
  deleteClass(g(state.menyName),'show');
  addClass(g(toMenyName),'show');
  addClass(g(state.menyName),'hidden');
  deleteClass(g(toMenyName),'hidden');
  state.menyName = toMenyName;
};

var dialogSystem = {

};

var startGame = function(){
	loadGame();
  changeWindow('.dialog');
  function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'music/hui.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
  var hui = function(){
    addHTML(g('.dialog-content'),'<h1 class="dialog-character">Голос в голове:</h1><div class="dialog-text"><p>Говно, залупа, пенис, хер, давалка, хуй, блядина, Головка, шлюха, жопа, член, еблан, петух, мудила, Рукоблуд, ссанина, очко, блядун, вагина, Сука, ебланище, влагалище, пердун, дрочила Пидор, пизда, туз, малафья, гомик, мудила, пилотка, манда, Анус, вагина, путана, педрила, шалава, хуила, мошонка, елда. ОНО МЕНЯЕТЦО!!!</p></div>')
    console.log(g('.ptext'));
   console.log('govno');
   soundClick();
  };
  addListener(g('.next'),'click',hui);

};

var startSettings = function(){
  changeMeny('.meny-settings');
};

var startAuthors = function(){
  changeMeny('.meny-authors');
};

var backInMeny = function(){
  changeMeny('.meny-main');
};

addListener(g('.start-game'),'click',startGame);
addListener(g('.settings'),'click',startSettings);
addListener(g('.authors'),'click',startAuthors);
addListener(g('.back-meny'),'click',backInMeny);
