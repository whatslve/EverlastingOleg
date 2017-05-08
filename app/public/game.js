"use strict"

var state = {
    gameState: '.meny',
    stage: 'begin',
    idDialog: '1',
    badBoy: '0',
    trueBoy: '0',
    menyName: '.meny-main'
};

var cookan = getCookie('gameStatus');
if(cookan == undefined){
  saveGame();
};

var changeWindow = function(toWindowName){
  deleteClass(g(state.gameState),'show');
  addClass(g(toWindowName),'show');
  addClass(g(state.gameState),'hidden');
  deleteClass(g(toWindowName),'hidden');
  state.gameState = toWindowName;
};

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
