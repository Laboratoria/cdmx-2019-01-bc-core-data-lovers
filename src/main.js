//Variable para acceder a toda la data
const dataWorldbank= WORLDBANK;

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

    // //
    // const buttonArray = Array.from(document.getElementsByClassName('button'));
    // for (let i = 0; i < buttonArray.length; i++ ) {
    //     buttonArray[i].addEventListener('click', (event)=> console.log(filterData(dataWorldbank, event.target.id)));
    // } 

    // const filterData = (data, texto) => {
    //     return data[texto].indicators;
        
    // }

    // const countryFilter=(filterWorldbank,countries)=>{
    // const filterWorldbank=dataWorldbank;
    // console.log(filterWorldbank)
    // }


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


const bra = document.getElementById('BRA');
const indi = document.getElementById('indicator')


const prueba = () => {
    let text = 'Texto de inicio';
    print(text)
}

const ejecutable = () => {
    //valor select
    //valor button 
    const result = window.dataBase.dataFunction(dataWorldbank)
    print(result)
}

bra.addEventListener('click',  ejecutable )

const print = (papintar) => {
    indi.innerHTML = papintar
}

prueba()