// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

// Traer elementos del data
//const dataMex = WORLDBANK.MEX.indicators;
//console.log(database)

/*const literacy = (select) => {
  let userIndicator;
  if (select === "adultWomen"){
      let literacyIndicator = database.filter (element => {
      return element.indicatorName === "Tasa de alfabetización, mujeres adultas (% de mujeres de 15 años o más)";
    })
    literacyIndicator.forEach(element => {
      let indicatorData = element.data;
      userIndicator = indicatorData;
    })
  } else if (select === "youngWomen"){
     let literacyIndicator = database.filter (element => {
     return element.indicatorName === "Tasa de alfabetización, mujeres jóvenes (% de mujeres entre 15 y 24 años)";
  })
    literacyIndicator.forEach(element => {
    let indicatorData = element.data;
    userIndicator = indicatorData;
    }) 
  }
  return userIndicator;
};

window.literacy = literacy;*/



/*const levelOfInstruction = dataMex.filter(function(){
  let indicatorCode = element.indicatorCode
  return indicatorCode.data
})
console.log(levelOfInstruction)*/


// recorrer elementos (indicador, dato y año) 

const dataEducacion = () => {
  const dataMex = WORLDBANK.MEX.indicators;
  console.log(dataMex)
  const dataEducation = dataMex.forEach (element => {
  let indicatorName = element.indicatorName;
  console.log("indicatorName")
 });
}



/*const dataEducation = dataMex.forEach (element => {
  let year = element.data
  let indicatorName = element.indicatorName;
  for (data in year) {
    console.log(indicatorName,`year.${data} - ${year[data]}`)
  }
});*/



/*const instruction = dataMex.map ((data) => return(data.year))*/



/*const levelOfInstruction = (option) => {
  let instruction = dataMex.filter (
    dataMex => dataMex.indicatorName == data
  )
  console.log(levelOfInstruction)
}*/
//const levelOfInstruction = dataMex.filter(element(indicatorCode[WORLDBANK["SE.TER.CUAT.BA.FE.ZS"]])) 
 // console.log(levelOfInstruction)



/*const levelOfInstruction = dataMex.map(dataMex => 
  `${dataMex.alfabetismo} ${dataMex.educacion}`);
  console.log(levelOfInstruction) */ 

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