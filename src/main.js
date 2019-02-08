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
const dataOrigin = database.dataFunction(WORLDBANK);


//Elementos DOM
const literacy = document.getElementById("literacy");
const levelOfInstruction = document.getElementById("levelOfInstruction");
const schoolRegistration = document.getElementById("schoolRegistration");
const literacyOptions = document.getElementById("literacyOptions");
const levelOfInstructionOptions = document.getElementById("levelOfInstructionOptions");
const schoolRegistrationOptions = document.getElementById("schoolRegistrationOptions");






