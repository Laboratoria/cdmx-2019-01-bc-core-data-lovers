window.WorldBank = {
  dataCountries: (data, countries) => {
    let dataByCountries = data[countries].indicators;
    return dataByCountries;
  },
  percentAndYear: (data, matchYear) => {
    let newData = {}
    data.forEach(objeto => {
      if (objeto.indicatorName === matchYear) {
        newData = objeto.data;
        return newData
      }
    });
    return newData
  },
  sortPercentAndYear: (arrResultYear, sortValue) => {
     
    if (sortValue === "upward") {
      
      arrResultYear.sort(
        function (a, b) {
          console.log(arrResultYear)
          
          return a[1] - b[1];
        });
    } else if (sortValue === "falling") {
      arrResultYear.sort(
        function (a, b) {
          console.log(arrResultYear)
      
          return b[1] - a[1];
        });
    }
    return arrResultYear;

  }
  //   if (sortValue === "upward")
  //   {arrResultYear.sort((a,b)=>(a[1]>b[1]?1:-1));
  //   }else if(sortValue === "falling")
  //   {arrResultYear.sort((a,b)=>(a[1]<b[1]?-1:1));
  //   }
  //   return arrResultYear  
  // }

}
