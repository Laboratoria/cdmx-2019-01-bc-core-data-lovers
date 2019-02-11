// Traer elemento HTML
/*const root = document.getElementById("root");
const literacyOptions = document.getElementById("literacyOptions");
const dataLiteracy = document.getElementById("dataLiteracy");*/


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


//Elementos DOM
const database = WORLDBANK;
const literacy = document.getElementById("literacy");
const levelOfInstruction = document.getElementById("levelOfInstruction");
const schoolRegistration = document.getElementById("schoolRegistration");
const literacyOptions = document.getElementById("literacyOptions");
const levelOfInstructionOptions = document.getElementById("levelOfInstructionOptions");
const schoolRegistrationOptions = document.getElementById("schoolRegistrationOptions");

const prueba = () => {
    let text = "texto de inicio";
    print(text)
}
//console.log(prueba) //ejemplo John

const ejecutable = () => {
    const result = window.databaseMexEducation.dataFunction(database);
    print(result);
}

literacy.addEventListener("click", ejecutable)

const print = (papintar) => {
imprimiendo.innerHTML = papintar
}


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
     




