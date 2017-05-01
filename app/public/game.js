
var language, links, contentEl, navEl, state, day, stage, karm, settings, authors;
language = 'ru';//Язык диалогов
contentEl = document.querySelector('.dialog');//обработчик диалога
navEl = document.querySelector('.meny');//обработчик меню
play = document.querySelector('.startGame');//обработчик старта игры
settings = document.querySelector('.settings');//обработчик найстройки игры
authors = document.querySelector('.authors');//обработчик авторы игры
state = "meny";//Статус игры
var updatestate = function(state){

};//обновить статус

var saveGame = function(){
  setCookie("state", state, null);
};//сохранить текущий статус в куки

var startGame = function(){
navEl.setAttribute("class", "meny hidden");
contentEl.setAttribute("class", "dialog show");

};//начало игры
var startSettings = function() {

};

var startAuthors = function(){

};

play.addEventListener('click', function(){
  startGame();
});//клик по ссылке начать игру

settings.addEventListener('click', function(){
  startSettings();
});//клик по ссылке настройки

authors.addEventListener('click', function(){
  startAuthors();
});//клик по ссылке Авторы
