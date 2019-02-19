window.WorlDbank ={
    percentAndYear: (data,matchYear) => {
        let newData = {}
        data.forEach(objeto => {
          if (objeto.indicatorName === matchYear) {
            newData = objeto.data;
            return newData;
          }
        });
        return newData
      },
}