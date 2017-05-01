
var language, links, updatestate, contentEl, navEl;
language = 'ru';
contentEl = document.querySelector('.dialog');
navEl = document.querySelector('.meny');
links = {
  startGame: "Йоу"
};
updatestate = function(state){
if(!state) return;
 contentEl.innerHTML = links[state.page];
};
navEl.addEventListener('click', function(e){
  var state;
  if (e.target.tagName !=='A') return;
  state = {page: e.target.getAttribute('href')};
  history.pushState(state,'',state.page);
  updatestate(state);
  e.preventDefault();
});
