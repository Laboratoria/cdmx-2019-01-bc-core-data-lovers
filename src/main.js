//Declaramos input del año
let yearbutton = document.getElementById("yearbttn");
//Declaramos input del usurio
let userbutton = document.getElementById("user");
//Declaramos input del consulta
let searchbutton = document.getElementById("search");
//Declaramos input del ALL DATA
//let allDataButton = document.getElementById("all");
//Constante de la sección know del HTML
const resultsecc = document.getElementById("result");
//Constante que contiene la data
const injuriesBy = window.INJURIES;

//Función al botón de consulta. Toma los inputs y Obtiene su Valor. Ejecuta la función consult y muestra el resultado.
searchbutton.addEventListener("click", () => {
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;
  if(userValue === 'all'){
    resultsecc.innerHTML = ''
    const resultDatos = window.data.order(injuriesBy, yearValue, userValue);
    const table = document.getElementById('table')
    table.innerHTML = `          <table>
                <tr>
                  <th> AÑO ${resultDatos[0]} </th>
                  <th> TIPO DE HERIDO </th>
                  <th> TOTAL </th>
                  </tr>
                  <tr>
                    <td colspan="2"> MOTOCICLISTA </td>
                    <td> ${resultDatos[1]} </td>
                  </tr>
                  <tr>
                    <td colspan="2"> CICLISTA </td>
                    <td> ${resultDatos[2]} </td>
                  </tr>
                  <tr>
            <td colspan="2"> PEATON </td>
            <td> ${resultDatos[3]} </td>
        </tr>
        <tr>
          <td colspan="2"> AUTOMOVIL </td>
          <td> ${resultDatos[4]} </td>
      </tr>
              </table>`
  } else {
    console.log('no soy all');
    table.innerHTML = ''
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
