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
//Constante que contiene la tabla
const table = document.getElementById('table');
//Declaramos botón de ordenar
// let ordenbutton = document.getElementById("ordendata");
// //users
// let motociclista = "MOTOCICLISTA"
// ciclista = "CICLISTA"
// peaton = "PEATÓN"
// auto = "AUTOMOVILISTA"

//Función al botón de consulta. Toma los inputs y Obtiene su Valor. Ejecuta la función consult y muestra el resultado.
searchbutton.addEventListener("click", () => {
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;
  if(userValue === 'all'){
    resultsecc.innerHTML = '';
    const resultDatos = window.data.order(injuriesBy, yearValue, userValue);
    table.innerHTML = `          <table>
                <tr>
                  <th> AÑO </th>
                  <th> TIPO DE HERIDO </th>
                  <th> TOTAL </th>
                  </tr>
                  <tr>
                    <td rowspan="4"> ${resultDatos[0]} </td>
                    <td> MOTOCICLISTA </td>
                    <td> ${resultDatos[1]} </td>
                  </tr>
                  <tr>
                    <td> CICLISTA </td>
                    <td> ${resultDatos[2]} </td>
                  </tr>
                  <tr>
            <td> PEATON </td>
            <td> ${resultDatos[3]} </td>
        </tr>
        <tr>
          <td> AUTOMOVILISTAS </td>
          <td> ${resultDatos[4]} </td>
      </tr>
              </table>`
  } else {
    //console.log('no soy all');
    table.innerHTML = '';
    const resultData = window.data.consult(injuriesBy, yearValue, userValue);
    resultsecc.innerHTML = `<b>Año:</b>${resultData[0]} <b>Total de heridos:</b>${resultData[1]}`;
  }

});

// // allDataButton.addEventListener("click", () => {
// //   alert("Hello! I am an alert box!!");
// //   let yearValue = injuriesBy
// //   //resultsecc.innerHTML = `${newData[0]}`;
// //   }
// );
