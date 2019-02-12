//Cambio de páginas
function myFunction() {
    document.getElementById("page1").style.display = "none"
    document.getElementById("page2").style.display = "block"
   }
   
   function functionA() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("results").style.display = "block";
   }




/*const print = (window.literacy) => {
    let result = `<h5>${window.literacy}</h5>`
    dataLiteracy.insertAdjacentHTML("beforeend", result);

}*/

/*const newData = () => {
    let options = literacyOptions.value;
    let literacy = filtroLiteracy(select);
    dataLiteracy = document.write("Los datos son:");
}*/

//Traer base de datos A
//const originDatabase = databaseMexEducation.dataFunction(WORLDBANK);


//Elementos DOM-funciona
/*const database = WORLDBANK;

const literacy = document.getElementById("literacy");
const literacyOptions = document.getElementById("literacyOptions");
const countriesOptions = document.getElementById("countriesOptions");
console.log(literacy, literacyOptions, countriesOptions)


//ejemplo John

const ejecutable = () => {
    const result = window.databaseMexEducation.dataFunction(database);
    print(result);
}

literacyOptions.addEventListener("change", ejecutable)

const print = (papintar) => {
imprimiendo.innerHTML = papintar
}*/


//Eventos

/*categoriesButtons.forEach(categoriesButtons => categoriesButtons.addEventListener ("click", (e) => {
    switch(e.target.id){
        case "literacy":
        result 
    }
} ))*/

/*const buttonArray = Array.from(document.getElementsByClassName('button'));
console.log(buttonArray)
     for (let i = 0; i < buttonArray.length; i++ ) {
         buttonArray[i].addEventListener('click', (event)=>console.log(filterData(dataWorldbank, event.target.id)));
     } 

     const filterData = (data, texto) => {
         return data[texto].indicators;
        
     }

     const indicator= document.getElementById("indicator");

     const countryFilter=(filterWorldbank,countries)=>{
     const filterWorldbank=dataWorldbank;
     console.log(filterWorldbank) 
     }*/
     





