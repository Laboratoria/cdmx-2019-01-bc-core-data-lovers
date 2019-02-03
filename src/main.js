const buttonMenu= document.getElementById('showMenu');
const menuList= document.getElementById('menuList');
const box2= document.getElementById('box2');
const box3= document.getElementById('box3');
const buttonHome = document.getElementById('home');
const buttonIndicador = document.getElementById('indicador');
const selOption = document.getElementById('filtrar-pais');
let contenido = document.getElementById('contenido');
let contador=0;

const mostrarMenu = () =>{
    if(contador==0){
        menuList.style.display= 'block';
        contador ++;
    }
    else{
        menuList.style.display= 'none';
        contador=0;
    }
}

const menu = () =>{
    mostrarMenu()
}
buttonMenu.addEventListener('click', menu);

const bienvenida = () =>{
    mostrarMenu()
    box2.classList.remove('hide');
    box3.classList.add('hide');
}

buttonHome.addEventListener('click', bienvenida);


const muestra_indicador = () =>{
    mostrarMenu()
    box2.classList.add('hide');
    box3.classList.remove('hide');
}
buttonIndicador.addEventListener('click', muestra_indicador);

/*const imprime = (pais) =>{
 let result = `<h1>${pais}</h1>`
 contenido.insertAdjacentHTML("beforeend", result);
}*/

const elemCambio = () =>{
        
        let select= selOption.value; //Select optiene el valor que contiene cada opcion de value
        console.log(select);
        let pais = filtroPais(select);
        contenido = document.write("Los datos del indicador Población, mujeres (% del total) son: " + JSON.stringify(pais));
              
}
selOption.addEventListener('click',elemCambio);