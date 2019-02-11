//Variable para acceder a toda la data
const dataWorldbank = WORLDBANK;


// TODO:
// - hacer iteracion de la data acceder a propiedades y pintar botones, 
// - obtener el contenedor donde se pinten los botones

//funcion para crear botones dinamico
/*const botonesPaises=(textPais)=>{
    const buttonPais=document.createElement("button");
    buttonPais.innerHTML=textPais;
    buttonPais.id = textPais
    //buttonPais.addEventListener('click', ()=>console.log('hola'))
    return buttonPais
}
const conuntries=document.getElementById("countries");
console.log(conuntries)
for (i in dataWorldbank) {
    console.log(botonesPaises(i))
    conuntries.appendChild(botonesPaises(i));
    //botonesPaises(i).addEventListener("click",()=>console.log("hola"));
}*/

//con esta función se obtienen los arreglos por separado de cada botón (país, ya que se utiliza el mismo ID en el botón que en la data)

/*const buttonArray = Array.from(document.getElementsByClassName('button'));
for (let i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener('click', (event) => console.log(filterData(dataWorldbank, event.target.id)));
}

const filterData = (data, texto) => { 
  return data[texto].indicators;
}

const indicator = document.getElementById("indicator");

const countryFilter = (filterWorldbank, countries) => {
  const filterWorldbank = dataWorldbank;
}*/



//funcion para traer el elemento del HTML donde vamos a pintar los indicadores
/*const indicator= document.getElementById("indicator");
//funcion para imprimir elementos en el HTML
const printChl=(indicatorName)=> {
    let result=`<p>${indicatorName}</p>`
    indicator.insertAdjacentHTML("beforeend",result);
    }
dataChl.forEach(element =>{
    let indicatorName=element.indicatorName;
    printChl(indicatorName)
});*/


/*const mex = document.getElementById('MEX');
const indicator = document.getElementById('indicator')


const prueba = () => {
    let text = 'Texto de inicio';
    print(text)
}

const ejecutable = () => {
    //valor select
    //valor button 
    const result = window.dataBase.dataFunction(dataWorldbank);
    print(result)
}

mex.addEventListener('click',  ejecutable )

const print = (papintar) => {
    indicator.innerHTML = papintar
}

prueba()*/

/*const conf = document.getElementById("conf");
const ejecutable = () => {
    const result = window.dataBase.dataFunction(dataWorldbank);
    print(result);
}
conf.addEventListener("click", ejecutable);
const print = (papintar) => {
indicator.innerHTML = papintar
}*/

const selOption = document.getElementById('filtrar-pais');

const filtraIndPais = () =>{
    //contenido.style.display= 'block';
    let select= selOption.value; //Select optiene el valor de cada value "MEX", "PER","BRA","CHL"
    //console.log(select);
     let pais = window.filtroPais(select); //Se llama la funcion window.filtroPais con el valor de selec
     recorrerObjeto (pais); 
}

selOption.addEventListener('click',filtraIndPais); //funcion recorre el objeto
const recorrerObjeto = (pais)=>{
let respuesta="";
 for (let i in pais) //for iteracon cada elemento del objeto
  {
    respuesta+="<li>"+"<b>"+i+":  "+"</b>"+pais[i].toFixed(2)+"%"+"</li>"+"<br>"; //cada elemnto del objeto se muestra en li, usando toFixed para delimitar decimales
  }
  document.getElementById('indicator').innerHTML = respuesta;   
 return respuesta
}
