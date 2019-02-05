function myFunction() {
    document.getElementById("page1").style.display = "none"
    document.getElementById("page2").style.display = "block"
   }
   
   function functionA() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("results").style.display = "block";
   }

const root = document.getElementById("root");
const literacyOptions = document.getElementById("literacyOptions");
const dataLiteracy = document.getElementById("dataLiteracy");


/*const print = (window.literacy) => {
    let result = `<h5>${window.literacy}</h5>`
    dataLiteracy.insertAdjacentHTML("beforeend", result);

}*/
const newData = () => {
    let options = literacyOptions.value;
    let literacy = filtroLiteracy(select);
    dataLiteracy = document.write("Los datos son:");
}