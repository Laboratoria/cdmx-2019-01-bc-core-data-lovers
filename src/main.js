//Declarando las variables que enlazan los elementos HTML mediante el DOM
const start = document.getElementById('start');
const championList = document.getElementById('champion-list');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click',()=>{
  start.classList.add('hide');
  championList.classList.remove('hide');
});
