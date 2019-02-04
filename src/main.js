// Traer elemento HTML
const root = document.getElementById("root");
const literacyOptions = document.getElementById("literacyOptions");
const result = document.getElementById("result");

const print = (literacy) => {
    let result = `<h5>${literacy}</h5>`
    result.insertAdjacentHTML("beforeend", result);

} 


