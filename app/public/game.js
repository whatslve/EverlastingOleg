
var language, links, contentEl, navEl, state, day, stage, karm, settings, authors,backMeny;
language = 'ru';//Язык диалогов
contentEl = document.querySelector('.dialog');//обработчик диалога
navEl = document.querySelector('.meny');//обработчик меню
play = document.querySelector('.startGame');//обработчик старта игры
settings = document.querySelector('.settings');//обработчик найстройки игры
authors = document.querySelector('.authors');//обработчик авторы игры
backMeny = document.querySelectorAll('.back-meny');//обработчик кнопки назад в меню
mainMeny = document.querySelector('.window-main-meny');
state="meny";
var saveGame = function(){
  setCookie("state", state, null);
};//сохранить текущий статус в куки
var startMeny = function(){

}
var startGame = function(){
  navEl.setAttribute("class", "meny hidden");
  contentEl.setAttribute("class", "dialog show");
  alert("игра типо началось но еще нихуя нету");
};//начало игры
var startSettings = function() {
  state="settings";
  document.querySelector(".window-"+state).setAttribute("class", "window-"+state+ " show");
  mainMeny.setAttribute("class", "window-main-meny hidden");
};

var startAuthors = function(){
  state="authors";
  document.querySelector(".window-"+state).setAttribute("class", "window-"+state+ " show");
  mainMeny.setAttribute("class", "window-main-meny hidden");
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

var backMenyClick = function(){
  var object;
  mainMeny.setAttribute("class", "window-main-meny show");
  document.querySelector(".window-"+state).setAttribute("class", "window-"+state.toLowerCase()+" hidden");
};
for (i = 0; i < backMeny.length; ++i) {
  backMeny[i].addEventListener('click',function(){
    backMenyClick();
  });
};
