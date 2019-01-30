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



/*const buttonIdentificador= document.getElementById("Identificador");

 const home = () =>{
    const box2= document.getElementById("box2");
    const box3= document.getElementById("box3");

    box2.classList.add('hide');
    box3.classList.remove('hide');
}

buttonHome.addEventListener('click', home);*/