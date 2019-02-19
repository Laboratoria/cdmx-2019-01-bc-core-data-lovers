const baseDatos = window.WORLDBANK;
const buttonMenu = document.getElementById('showMenu');
const menuList = document.getElementById('menuList');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const buttonHome = document.getElementById('home');
const buttonIndicador = document.getElementById('indicador');
const selOption = document.getElementById('filtrar-pais');
const orderAscDat = document.getElementById('order');
const maximo = document.getElementById('maximo');
const nameIndicators = document.getElementById('filtrar-indicador');
const valorMAx = document.getElementById('valorMAx');
const social = document.getElementById('social');
const reporte = document.getElementById('reporte');
let contenido = document.getElementById('contenido');
// const valorMAx = document.getElementById('valorMAx');
// const social = document.getElementById('social');
let buttonLimpiar = document.getElementById('limpiar');
let buttonContact = document.getElementById('contact');
let buttonProp = document.getElementById('prop');
const change = document.getElementById('change')
let ctx = document.getElementById("myChart").getContext("2d"); //contenido grafica
let valorAnioX = [];
let valorPorcentajeY = [];
let pais;
let viewMax;
let contador = 0;


const mostrarMenu = () => { //Funcion mantiene activo o desactivo el menu, segun el valor del contador
  if (contador == 0) {
    menuList.style.display = 'block';
    contador++;
  } else {
    menuList.style.display = 'none';
    contador = 0;
  }
}

const menu = () => { //llama funcion mostrar menu, cuando se da click en Menu
  contenido.style.display = 'none';
  mostrarMenu()
}
buttonMenu.addEventListener('click', menu);

const bienvenida = () => { //funcion muestra apartado Bienvenida
  mostrarMenu()
  reporte.style.display = 'none';
  valorMAx.style.display = 'none';
  contenido.style.display = 'none';
  box2.classList.remove('hide');
  box3.classList.add('hide');
  box4.classList.add('hide');
  box5.classList.add('hide');
}
buttonHome.addEventListener('click', bienvenida);


const muestra_indicador = () => { // funcion muestra apartado indicador
  mostrarMenu()
  valorMAx.style.display = 'block';
  contenido.style.display = 'block';
  reporte.style.display = 'block';
  box2.classList.add('hide');
  box3.classList.remove('hide');
  box4.classList.add('hide');
  box5.classList.add('hide');
}
buttonIndicador.addEventListener('click', muestra_indicador);

const showContact = () => {
  mostrarMenu()
  reporte.style.display = 'none';
  valorMAx.style.display = 'none';
  contenido.style.display = 'none';
  box3.classList.add('hide');
  box2.classList.add('hide');
  box5.classList.add('hide');
  box4.classList.remove('hide');
  social.classList.remove('hide');
}
buttonContact.addEventListener('click', showContact);

const showProp = () => {
  mostrarMenu()
  reporte.style.display = 'none';
  valorMAx.style.display = 'none';
  contenido.style.display = 'none';
  social.style.display= 'none';
  box3.classList.add('hide');
  box2.classList.add('hide');
  box4.classList.add('hide');
  box5.classList.remove('hide');
}
buttonProp.addEventListener('click', showProp);


const filtraIndPais = () => {
  valorAnioX = []; //inicializa los arreglo eje X para el pintado de la grafica
  valorPorcentajeY = []; //inicializa los arreglo eje Y para el pintado de la grafica
  contenido.style.display = 'block';
  let selectPais = selOption.value; //Select optiene el valor de cada value "MEX", "PER","BRA","CHL"
  let indicador = nameIndicators.value;
  //console.log(select);
  pais = window.worldBank.filtroPais(baseDatos, selectPais, indicador); //Se llama la funcion window.filtroPais con el valor de selec
  recorrerObjeto(pais);
  
  valorMAx.style.display = 'none';
}
nameIndicators.addEventListener('change', filtraIndPais); //funcion recorre el objeto


const recorrerObjeto = (pais) => {
  reporte.style.display = 'block';
  let respuesta = "<li>" + "<font size=4.5>" + "<b>" + "Año " + "&nbsp" + "&nbsp" + "  Valor(%)" + "</font>" + "</li>" + "</b>" + "<br>";
  
  for (let i in pais) //for iteracon cada elemento del objeto que se almacena en la variable pais
  {
    respuesta += "<li>" + "<b>" + i + ": " + "&nbsp;&nbsp;&nbsp;" + " </b>" + pais[i].toFixed(2) + "%" + "</li>" + "<br>"; //cada elemnto del objeto se muestra en li, usando toFixed para delimitar decimales
  }
  for (let i in pais) { //recorre objeto para pasar el año a nuevo arrego de eje X
    valorAnioX.push(i);
  }
  for (let j in pais) { //recorre objeto para pasar el año a nuevo arrego de eje Y
    valorPorcentajeY.push(pais[j]);
  }
  let report = "<p>" + "La gráfica muestra una variación porcentual" + " del año 1960 con " + valorPorcentajeY[0].toFixed(2) + "%" + " a " + valorPorcentajeY[57].toFixed(2) + "%" + " para 2017." + "</p>";
  document.getElementById('reporte').innerHTML = report;
  document.getElementById('contenido').innerHTML = respuesta;
  document.getElementById('graf').style.display = 'block'; //comentar grafica
  DatGraph();
  return respuesta;
}

const prtOrder = (orderObj) => {
  let respOrder = "<li>"  + "<font size=4.5>" + "<b>" + "Año " + "&nbsp" + "&nbsp" + "  Valor(%)" + "</li>" + "</b>" + "<br>";
  for (let i in orderObj) {
    respOrder += "<li>" + "<b>" + orderObj[i][0] + ":  " + "</b>" + "&nbsp" + "&nbsp" + parseFloat(orderObj[i][1]).toFixed(2) + "%" + "</li>" + "<br>";
  }
  document.getElementById('contenido').innerHTML = respOrder;
  return respOrder;
}

const ptrMax = (selcValor, maxObj) => { //imprime max/min
  
  valorMAx.style.display = 'block';
  viewMax;
  if (selcValor === 'max') {
    viewMax = "<b>" + "<font size=4.5>" + "El valor maximo es: " + maxObj.toFixed(2) + "%" + "</b>";
  }
  
  if (selcValor === 'min') {
    viewMax = "<b>" + "<font size=4.5>" +  "El valor minimo es: " + maxObj.toFixed(2) + "%" + "</b>";
  }
  
  document.getElementById('valorMAx').innerHTML = viewMax;
  
  return maxObj;
}


const orderByAscent = () => { //funcion ordenar asc/desc
  let arrayOrder = pais;
  let order = orderAscDat.value;
  //console.log(order);
  let orderObj = window.worldBank.orderByAsc(order, arrayOrder)
  //console.log(orderObj);
  prtOrder(orderObj)
}
orderAscDat.addEventListener('change', orderByAscent); //funcion recorre el objeto*/


const valorMaximo = () => { //funcion ordenar max/min
  let arrayMax = valorPorcentajeY;
  //console.log(arrayMax);
  let selcValor = maximo.value;
  let maxObj = window.worldBank.objMax(selcValor, arrayMax);
  ptrMax(selcValor, maxObj)
}
maximo.addEventListener('change', valorMaximo); //funcion recorre el objeto*/


const limpiar = () => {
  document.getElementById('filtrar-pais').value = '';
  document.getElementById('filtrar-indicador').value = '';
  document.getElementById('order').value = '';
  document.getElementById('valorMAx').style.display = 'none';
  document.getElementById('reporte').style.display = 'none';
  document.getElementById('contenido').innerHTML = '';
  document.getElementById('graf').style.display = 'none';
}

buttonLimpiar.addEventListener('click', limpiar)
//console.log(limpiar);


const DatGraph = () => { //funcion llenado de grafica con arrayX y arrayY
  let arrayYear = valorAnioX;
  let arrayValors = valorPorcentajeY;
  let prtGrap = ctx;
  
  let almacenaGraf = window.worldBank2.VerGrafica(arrayYear, arrayValors, prtGrap);
  
  return almacenaGraf;
}

change.addEventListener('click', muestra_indicador)