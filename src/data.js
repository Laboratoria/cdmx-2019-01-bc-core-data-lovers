//Traer elementos del DOM
/*const indicador = document.getElementById("indicador");

// función para imprimir elementos en el html
const print = (dataEducation) => {
  let result = `<h5> ${dataEducation} </h5>`
  indicador.insertAdjacentHTML("beforeend", result)
  print(dataEducation)
};

// extraer elementos
dataEducacion.forEach (element => {
  let indicadorName = element.indicatorName;
  print(indicadorName)
});*/


//Función para extraer los datos de WORLDBANK A
/*window.database = {
  dataFunction : (data) => {
    let dataMex = data.MEX.indicators;
    dataMex.forEach (element => {
      let year = element.data;
      let indicatorName = element.indicatorName;
      for (data in year) {
        console.log (indicatorName,`${data} - ${year[data]}`)}
  })
}
};*/

//Función para filtrar
window.database = {
  dataFunction : (arrayWORLDBANK, select) => {
    let dataMex = arrayWORLDBANK.MEX.indicators; //Indicadores de México
    let mexFilt = dataMex.filter (function(elemento){ //Filtrar por categoría
      
      
    }


  }
}
