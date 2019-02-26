const indicatorSelect = document.getElementById('selectIndicator');
const buttonCountries = document.getElementsByClassName('country');
let tableStadistic = document.getElementById('tableStadistic');



const url = './data/worldbank/worldbank.json'
fetch(url)
  .then(response => response.json())
  .then(dataJson => dataJson)
  .then(dataWorld =>
    filterData(dataWorld))
  .catch(err => (err))


const filterData = (dataWorld) => {
  for (let i = 0; i < buttonCountries.length; i++) {
    buttonCountries[i].addEventListener('click', () => {
      let countrySelect = buttonCountries[i].value
      let indiSelect = indicatorSelect.value;
     




      window.worldBnk.filterCountry(dataWorld,countrySelect,indiSelect)
     
    })
  }
 document.getElementById('tableStadistic').innnerHTML= dataTable;
 return dataTable;
  
}





// let printData = (dataIndicator) => {


//     document.getElementById(tableStadistic).innerHTML;
//     window.worldBnk.filterCountry(dataIndicator)
//     console.log(dataIndicator)

//      //document.getElementById('tableStadistic').innerHTML= `<div>${dataIndicator.data}</div>`
      
   
//   //let result= `<section id="tableStadistic" class="tableStadistic"> </section>`
   
//     //printData(dataIndicator)
//     //console.log (dataIndicator);
    
//     }

    
 
   




// const fil =() => {  
// let countrySelect= buttonCountries;
// let indiSelect=indicatorSelect.value;
//  console.log(countrySelect)  

// (window.data.dataW(dataWorld,countrySelect,indiSelect))


// }
// indicatorSelect.addEventListener("change", fil);




//Slides

let myIndex = 0
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}