const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const page6 = document.getElementById('page6');
const page7 = document.getElementById('page7');



//Botón de entrada
enterToPikapedia.addEventListener("click", () => {
    page1.classList.add('hide');
    page2.classList.remove('hide');
  })

  btn5.addEventListener("click", () => {
    page2.classList.add('hide');
    page1.classList.add('show');
  })