// function main() {
// 	// d3 code 
// 	var data = [30,40,28,35,20]
//     var movies = ['Peli 1', 'Peli 2', 'Peli 3', 'Peli 4', 'Peli 5']
// 	var svg = d3.select("svg"),
// 	width = svg.attr('width'),
// 	height = svg.attr('height'),
// 	radius = Math.min(width, height) / 2
	
// 	var g = svg.append('g')
// 		.attr('transform', 'translate('+ width / 2 + ',' + height / 2 + ')');

// 	var color = d3.scaleOrdinal(['#ff595e','#ffca3a', '#8ac926', '#1982c4','#6a4c93'])
// 	var pie = d3.pie();
// 	var arc = d3.arc()
// 			.innerRadius(0)
// 			.outerRadius(radius);
// 	var arcs = g.selectAll('arc')
// 			.data(pie(data))
// 			.enter().append('g')
// 			.attr('class','arc')
	
// 	arcs.append('path')
// 		.attr('fill',function(d, i){
// 			return color(i)
// 		})
// 		.attr('d', arc);

    
//     arcs.append('text')
//         .attr('transform', function(d) {
//             return 'translate(' + arc.centroid(d) + ')';
//         })              
//         .attr('text-anchor', 'middle')
//         .text(function(d, i) {
//             return movies[i];
//         });
// }


// import Chart from '../../node_modules/chart.js/dist/chart.js';


const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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






