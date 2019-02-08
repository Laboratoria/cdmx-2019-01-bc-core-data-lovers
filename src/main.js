  const table= document.getElementById("years");
  const printing= (years) => {
    let printedResult= `<p>${years}</p>`;
    table.insertAdjacentHTML("beforeend", printedResult);
  }