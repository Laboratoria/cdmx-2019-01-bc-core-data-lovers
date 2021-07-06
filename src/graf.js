window.worldBank2 = {
  
  VerGrafica: (arrayYear, arrayValors, ctx) => { //funcion grafica

    new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: arrayYear,
        datasets: [{
          label: 'Indicador Demografico (%)',
          data: arrayValors,
          backgroundColor: [
            'rgba(77, 169, 197, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(11,68,85,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })

  }

} //fin de window
