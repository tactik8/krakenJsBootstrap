

import { Chart, registerables} from 'https://esm.run/chart.js';

Chart.register(...registerables);



export const chart = {

    bar: barChartVertical,
    barVertical: barChartVertical,
    barHorizontal: barChartHorizontal,
    line: lineChart,
    pie: pieChart,
    scatter: scatterChart,
}



function barChartVertical(data, labels, maxY=null){


    let ctx = document.createElement('canvas');

    let config = {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    borderWidth: 1
                }]
            },
            options: {
                plugins:{
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }

    if(maxY){
            config.options.scales.y.suggestedMax=30;
    }


    //const ctx = document.getElementById('myChart')

    new Chart(ctx, config);

    return ctx

}


function barChartHorizontal(data, labels, maxY=null){


    let ctx = document.createElement('canvas');

    let config = {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    borderWidth: 1
                }]
            },
            options: {
                plugins:{
                    legend: {
                        display: false
                    }
                },
                indexAxis: 'y',
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }

    if(maxY){
            config.options.scales.y.suggestedMax=30;
    }


    //const ctx = document.getElementById('myChart')

    new Chart(ctx, config);

    return ctx

}


function lineChart(data, labels, maxY=null){


    let ctx = document.createElement('canvas');

    let config = {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    borderWidth: 1
                }]
            },
            options: {
                plugins:{
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }

    if(maxY){
            config.options.scales.y.suggestedMax=30;
    }


    //const ctx = document.getElementById('myChart')

    new Chart(ctx, config);

    return ctx

}

function pieChart(data, labels, maxY=null){


    let ctx = document.createElement('canvas');

    let config = {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    borderWidth: 1
                }]
            },
            options: {
                plugins:{
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }

    if(maxY){
            config.options.scales.y.suggestedMax=30;
    }


    //const ctx = document.getElementById('myChart')

    new Chart(ctx, config);

    return ctx

}



function scatterChart(dataX, dataY, labels, headingX, headingY, maxX=null, maxY=null){


    let data = [];
    for(let i=0; i< dataX.length; i++){
        data.push({x: dataX[i], y: dataY[i]})
    }


    let ctx = document.createElement('canvas');

    let config = {
            type: 'scatter',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    borderWidth: 1
                }]
            },
            options: {
                plugins:{
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    },
                    x: {
                        beginAtZero: true,
                        type: 'linear',
                        position: 'bottom'
                    }
                }
            }
        }

    if(maxX){
            config.options.scales.x.suggestedMax=maxX;
    }
    if(maxY){
            config.options.scales.y.suggestedMax=maxY;
    }


    //const ctx = document.getElementById('myChart')

    new Chart(ctx, config);

    return ctx

}