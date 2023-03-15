const ctx = document.getElementById('chart1');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Película 1', 'Película 2', 'Película 3', 'Película 4', 'Película 5'],
      datasets: [{
        label: 'Boletos vendidos',
        data: [30,40,28,35,20],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

const ctx2 = document.getElementById('chart2');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Película 1', 'Película 2', 'Película 3', 'Película 4', 'Película 5'],
      datasets: [{
        label: 'Boletos vendidos',
        data: [30,40,28,35,20],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
        ],
        hoverOffset: 4
      }]
    }
  });





