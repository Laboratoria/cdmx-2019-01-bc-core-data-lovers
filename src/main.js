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
//Users
let motociclista = "MOTOCICLISTA"
ciclista = "CICLISTA"
peaton = "PEATÓN"
auto = "AUTOMOVILISTA"

//Función al botón de consulta. Toma los inputs y Obtiene su Valor. Ejecuta la función consult y muestra el resultado.
searchbutton.addEventListener("click", () => {
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;
  if (userValue === 'all') {
    resultsecc.innerHTML = ''
    const resultDatos = window.data.order(injuriesBy, yearValue, userValue);
    let newmoto = [motociclista, resultDatos[1]]
    newbike = [ciclista, resultDatos[2]]
    newpeaton = [peaton, resultDatos[3]]
    newauto = [auto, resultDatos[4]]
    
    let ordered = [newmoto, newbike, newpeaton, newauto]
    ordered.sort((a,b) => {
      if (a.newbike > b.newmoto) {
        return 1;
      }
      return -1;
    });
    console.log(ordered)

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
  } else {
    table.innerHTML = ''
    const resultData = window.data.consult(injuriesBy, yearValue, userValue);
    resultsecc.innerHTML = `<b>Año:</b>${resultData[0]} <b>Total de heridos:</b>${resultData[1]}`;
  }
});
