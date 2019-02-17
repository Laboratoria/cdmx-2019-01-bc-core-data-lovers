//Declaramos input del año
let yearbutton = document.getElementById("yearbttn");
//Declaramos input del usurio
let userbutton = document.getElementById("user");
//Declaramos input del consulta
let searchbutton = document.getElementById("search");
//Constante de la sección know del HTML
const resultsecc = document.getElementById("result");
//Constante que contiene la data
const injuriesBy = window.INJURIES;
//Declaramos botón de ordenar
let ordenbutton = document.getElementById("ordendata");

//Users
let motociclista = "MOTOCICLISTA"
ciclista = "CICLISTA"
peaton = "PEATÓN"
auto = "AUTOMOVILISTA"

//Función al botón de consulta. Toma los inputs y Obtiene su Valor. Ejecuta la función consult y muestra el resultado.

searchbutton.addEventListener("click", () => {

  let resultDatos = []
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;
  if (userValue === 'all') {
    resultsecc.innerHTML = ''
    resultDatos = window.data.order(injuriesBy, yearValue, userValue);
    let newmoto = [motociclista, resultDatos[1]]
    newbike = [ciclista, resultDatos[2]]
    newpeaton = [peaton, resultDatos[3]]
    newauto = [auto, resultDatos[4]]

    const table = document.getElementById('table')
    table.innerHTML = `          <table>
    <tr>
    <th> AÑO ${resultDatos[0]} </th>
    <th> TIPO DE HERIDO </th>
    <th> TOTAL </th>
    </tr>
    <tr>
    <td colspan="2">${newmoto[0]}</td>
    <td> ${newmoto[1]} </td>
    </tr>
    <tr>
    <td colspan="2">${newbike [0]}</td>
    <td>${newbike[1]}</td>
    </tr>
    <tr>
    <td colspan="2">${newpeaton[0]}</td>
    <td> ${newpeaton[1]} </td>
    </tr>
    <tr>
    <td colspan="2">${newauto[0]}</td>
    <td> ${newauto[1]} </td>
    </tr>
    </table>`
    return resultDatos
  } else {
    table.innerHTML = ''
    const resultData = window.data.consult(injuriesBy, yearValue, userValue);
    resultsecc.innerHTML = `<b>Año:</b>${resultData[0]} <b>Total de heridos:</b>${resultData[1]}`;
  }
});
// ordenbutton.addEventListener("click",() => {
//   alert("holi")
//   ordenDatos = window.data.ordenData(injuriesBy,resultDatos);
//   console.log(ordenDatos)
//   return ordenDatos
// })

// function showAlert(){
//   alert('Holi');
// }

// ordenbutton.addEventListener('click', showAlert);