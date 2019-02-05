const buttonMenu= document.getElementById('showMenu');
const menuList= document.getElementById('menuList');
const box2= document.getElementById('box2');
const box3= document.getElementById('box3');
const buttonHome = document.getElementById('home');
const buttonIndicador = document.getElementById('indicador');
const selOption = document.getElementById('filtrar-pais');
let contenido = document.getElementById('contenido');
let contador=0;

const mostrarMenu = () =>{//Funcion mantiene activo o desactivo el menu, segun el valor del contador
    if(contador==0){
        menuList.style.display= 'block';
        contador ++;
    }
    else{
        menuList.style.display= 'none';
        contador=0;
    }
}

const menu = () =>{//llama funcion mostrar menu, cuando se da click en Menu
    contenido.style.display= 'none';
   
    mostrarMenu()
    
    
}
buttonMenu.addEventListener('click', menu);

const bienvenida = () =>{ //funcion muestra apartado Bienvenida
    mostrarMenu()
    box2.classList.remove('hide');
    box3.classList.add('hide');
}

buttonHome.addEventListener('click', bienvenida);


const muestra_indicador = () =>{// funcion muestra apartado indicador
    mostrarMenu()
    box2.classList.add('hide');
    box3.classList.remove('hide');
}
buttonIndicador.addEventListener('click', muestra_indicador);

const filtraIndPais = () =>{
    contenido.style.display= 'block';
    let select= selOption.value; //Select optiene el valor de cada value "MEX", "PER","BRA","CHL"
    //console.log(select);
     let pais = window.filtroPais(select); //Se llama la funcion window.filtroPais con el valor de selec
     recorrerObjeto (pais); 
}

selOption.addEventListener('change',filtraIndPais); //funcion recorre el objeto
const recorrerObjeto = (pais)=>{
let respuesta="";
 for (let i in pais) //for iteracon cada elemento del objeto
  {
    respuesta+="<li>"+"<b>"+i+":  "+"</b>"+pais[i].toFixed(2)+"%"+"</li>"+"<br>"; //cada elemnto del objeto se muestra en li, usando toFixed para delimitar decimales
  }
  document.getElementById('contenido').innerHTML = respuesta;   
 return respuesta
}