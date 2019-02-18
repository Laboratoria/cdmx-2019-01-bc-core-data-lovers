//Declaramos input del año
let yearbutton = document.getElementById("yearbttn");
//Declaramos input del usurio
let userbutton = document.getElementById("user");
//Declaramos input del consulta
let searchbutton = document.getElementById("search");
//Constante de la sección know del HTML
const resultsecc = document.getElementById("result");
//Declaramos botón de ordenar
let ordenbutton = document.getElementById("ordendata");
//Constante que contiene la data
const injuriesBy = window.INJURIES;
//Users
let motociclista = "MOTOCICLISTA"
ciclista = "CICLISTA"
peaton = "PEATÓN"
auto = "AUTOMOVILISTA"
//Constante que tiene el resultado de la función ORDER
let resultDatos = []


//Función al botón de consulta. Toma los inputs y Obtiene su Valor. Ejecuta la función consult y muestra el resultado.
searchbutton.addEventListener("click", () => {
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;

  if (userValue === 'all') {
    resultsecc.innerHTML = ''
    resultDatos = window.data.order(injuriesBy, yearValue, userValue);
    let newMoto = [motociclista, resultDatos[1]]
    let newBike = [ciclista, resultDatos[2]]
    let newPeaton = [peaton, resultDatos[3]]
    let newAuto = [auto, resultDatos[4]]

    let table = document.getElementById('table')
    table.innerHTML = `<table>
    <tr>
      <th> AÑO ${resultDatos[0]} </th>
      <th> TIPO DE HERIDO </th>
      <th> TOTAL </th>
    </tr>
    <tr>
      <td colspan="2">${newMoto[0]}</td>
      <td> ${newMoto[1]} </td>
    </tr>
    <tr>
      <td colspan="2">${newBike [0]}</td>
      <td>${newBike[1]}</td>
    </tr>
    <tr>
      <td colspan="2">${newPeaton[0]}</td>
      <td> ${newPeaton[1]} </td>
    </tr>
    <tr>
      <td colspan="2">${newAuto[0]}</td>
      <td> ${newAuto[1]} </td>
    </tr>
    </table>`

    return resultDatos
  } else {
    table.innerHTML = ''
    const resultData = window.data.consult(injuriesBy, yearValue, userValue);
    resultsecc.innerHTML = `<b>Año:</b>${resultData[0]} <b>Total de heridos:</b>${resultData[1]}`;
  }
});
