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
const dataOrigin = database.dataFunction(WORLDBANK);


//Traer datos B
//const dataMex = literacyData.dataFunction(WORLDBANK.MEX.indicators);

//Elementos DOM
const literacy = document.getElementById("literacy");
const levelOfInstruction = document.getElementById("levelOfInstruction");
const schoolRegistration = document.getElementById("schoolRegistration");
const literacyOptions = document.getElementById("literacyOptions");
const levelOfInstructionOptions = document.getElementById("levelOfInstructionOptions");
const schoolRegistrationOptions = document.getElementById("schoolRegistrationOptions");





