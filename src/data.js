window.WorldBank = {
  dataCountries: (data, countries) => {
    let dataByCountries = data[countries].indicators;
    return dataByCountries;
  },
  sortPercentAndYear: (arrResultYear, sortValue) => {
    if (sortValue === "upward") {
      arrResultYear.sort((a, b) => a[1] - b[1]);
    } else if (sortValue === "falling") {
      arrResultYear.sort((a, b) => (b[1] - a[1]));
    }
    return arrResultYear;
  },
  average: (arrAverage) => {
    let sum = arrAverage.reduce((previous, current) => current += previous);
    let avg = sum / arrAverage.length; 
    return avg;
  }
}

