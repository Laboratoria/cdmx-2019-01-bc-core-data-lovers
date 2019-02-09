const baseDatos =  window.WORLDBANK;
const buttonMenu= document.getElementById('showMenu');
const menuList= document.getElementById('menuList');
const box2= document.getElementById('box2');
const box3= document.getElementById('box3');
const buttonHome = document.getElementById('home');
const buttonIndicador = document.getElementById('indicador');
const selOption = document.getElementById('filtrar-pais');
const orderAscDat = document.getElementById('order');
const nameIndicators= document.getElementById('filtrar-indicador');
let contenido = document.getElementById('contenido');
const btgrafica = document.getElementById('btgrafica');
let ctx = document.getElementById("myChart").getContext("2d");//contenido grafica
let valorAnioX=[];
let valorPorcentajeY=[];
let pais;
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
    let indicador = nameIndicators.value;
    //console.log(select);
     pais = window.worldBank.filtroPais(baseDatos,select,indicador); //Se llama la funcion window.filtroPais con el valor de selec
     recorrerObjeto (pais); 
}

selOption.addEventListener('change',filtraIndPais); //funcion recorre el objeto


const recorrerObjeto = (pais)=>{
  
let respuesta="";
 for (let i in pais) //for iteracon cada elemento del objeto
  {
    respuesta+="<li>"+"<b>"+i+":  "+"</b>"+pais[i].toFixed(2)+"%"+"</li>"+"<br>"; //cada elemnto del objeto se muestra en li, usando toFixed para delimitar decimales
 }

for (let i in pais) {//recorre objeto para pasar el año a nuevo arrego de eje X
    valorAnioX.push(i);
 }
  //graficaX(valorAnioX)//llama funcion para asignar valores al eje X de la grafica


 for (let j in pais) {//recorre objeto para pasar el año a nuevo arrego de eje Y
    valorPorcentajeY.push(pais[j]);
 }
 // graficaY(valorPorcentajeY)//llama funcion para asignar valores al eje Y de la grafica
 
  document.getElementById('contenido').innerHTML = respuesta;   
 return respuesta;
}

const prtOrder=(orderObj)=>{
    let respOrder="";    
    for (let i in orderObj)
     {
        respOrder+="<li>"+"<b>"+orderObj[i][0]+":  "+"</b>"+parseFloat(orderObj[i][1]).toFixed(2)+"%"+"</li>"+"<br>";
     }     
    document.getElementById('contenido').innerHTML = respOrder;
    return  respOrder;
    }

const orderByAscent = () =>{
    let order= orderAscDat.value;
    //console.log(order);
    let orderObj = window.worldBank.orderByAsc(order)
    prtOrder(orderObj)
}
orderAscDat.addEventListener('change',orderByAscent); //funcion recorre el objeto*/



/*graficaX = (valorAnioX)=>{
    console.log(myChart.config.data.labels +=valorAnioX)
return myChart.config.data.labels=valorAnioX;
           
    //return myChart.config.data.labels=valorAnioX;;
    }

  graficaY = (valorPorcentajeY)=>{
   /* for (let j in pais) {//recorre objeto para pasar el año a nuevo arrego de eje Y
        valorPorcentajeY.push(pais[j]);
    }
    //console.log(myChart.config.data.datasets.data=valorPorcentajeY)
     
     return valorPorcentajeY;
    
  }    */ 


console.log(valorAnioX);
console.log(valorPorcentajeY);

const VerGrafica=()=>{

myChart= new Chart(ctx, { //funcion grafica
    type: 'line',
    data: {
        labels: valorAnioX,
        datasets: [{
            label: 'Indicador Demografico (%)',
            data: valorPorcentajeY,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
})

}

btgrafica.addEventListener('click',VerGrafica);
  