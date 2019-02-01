const buttonHome= document.getElementById('home');
buttonHome.addEventListener("click",()=>{
    const box2= document.getElementById("box2").style.display="block";
    const box3= document.getElementById("box3").style.display="none";
});

const buttonIdntificador= document.getElementById('identificador');
buttonIdntificador.addEventListener("click",()=>{
    const box3= document.getElementById("box3").style.display="block";
    const box2= document.getElementById("box2").style.display="none";
    
});


const indicatorPeru= WORLDBANK.PER.indicators;
console.log(indicatorPeru);
const contenido = document.getElementById("contenido");
const print = (indicatorPeru) =>{
  let result= `<h1>${indicatorPeru}</h1>`
  contenido.insertAdjacentHTML("beforeend", result);
}

indicatorPeru.forEach(element => {
    let dataPer = element.indicatorName;
    print(dataPer)
});

/*const buttonIdentificador= document.getElementById("Identificador");

 const home = () =>{
    const box2= document.getElementById("box2");
    const box3= document.getElementById("box3");

    box2.classList.add('hide');
    box3.classList.remove('hide');
}

buttonHome.addEventListener('click', home);*/