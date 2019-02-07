// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*window.data = { //enlazando el js
countryFilter: (dataWorldbank, countries)=>{ //se utilizan dos puntos por ser un objeto
  const dataWorldbank= WORLDBANK;

  const dataWorldbank = dataWorldbank;
  console.log(dataWorldbank);
}
}*/

window.dataBase = {
  dataFunction: (data) => {
    let mayus = data.WORLDBANK.PER.indicatorName;
    console.log(mayus)
    let pal = '';
    for(let i = 0; i< mayus.length; i++){
      pal += mayus[i].toUpperCase()
    }
    return pal
  }
};