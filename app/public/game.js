
var language, links, contentEl, navEl, state, day, stage;
language = 'ru';
contentEl = document.querySelector('.dialog');
navEl = document.querySelector('.meny');
links = {
  startGame: "Йоу"
};
state = "meny";
var updatestate = function(state){

};

var saveGame = function(){
  setCookie("state", state, null);
};

var startGame = function(){
navEl.setAttribute("class", "meny hidden");
contentEl.setAttribute("class", "dialog show");

};
navEl.addEventListener('click', function(){
  startGame();
});
