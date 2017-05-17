"use strict"
//Главный объект игры с ее статусом
var state = {
    gameState: '.meny',
    stage: 'begin',
    idDialog: 0,
    badBoy: 0,
    trueBoy: 0,
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
var array = ["Первый диалог","Второй диалог","Третий диалог"];
var textView = function(){
     addHTML(g('.dialog-content'),'<h1 class="dialog-character">'+array[state.idDialog]+'</h1><div class="dialog-text"><p>'+array[state.idDialog]+'</p></div>');
}
var dialogSystem = {
  next: function () {
    state.idDialog++;
    textView();
  },
  back: function () {
    state.idDialog--;
    textView();
  },

}
var startGame = function(){
	loadGame();
  changeWindow('.dialog');
  textView();
  addListener(g('.next'),'click',dialogSystem.next);
  addListener(g('.back'),'click',dialogSystem.back);
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
