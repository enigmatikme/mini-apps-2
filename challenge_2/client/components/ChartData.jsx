import React from 'react';
import ChartJS from 'chart.js';
var canvas = document.createElement('canvas');

export default class ChartData extends React.Component { 
    constructor(props) {
        super(props);
        
        this.initChart = this.initChart.bind(this);
        this.getData = this.getData.bind(this);
        this.getDates = this.getDates.bind(this);
    }
    
    componentDidMount() {
        this.initChart();
    }
    
    componentDidUpdate() {
        this.initChart();
    }
    
    getDates() {
        if (this.props.data) {
            let datas = Object.keys(this.props.data.bpi);
            return datas; 
        }
    }
    
    getData() {
        if (this.props.data) {
            let datas = Object.values(this.props.data.bpi);
            return datas; 
        }
    }
    
    initChart () {
        var data = this.getData();
        var labels = this.getDates();
        var ctx = this.refs.chart.getContext('2d');
        
        var updatedChart = new ChartJS.Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Closing Prices Per Date',
                    backgroundColor: 'red',
                    borderColor: 'red',
                    data: data,
                    type: 'line',
                    pointRadius: 0,
                    fill: false,
                    lineTension: 0,
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        distribution: 'series',
                        ticks: {
                            source: 'labels'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Closing price'
                        }
                    }]
                }
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
    
    render() {
        return (
            <div>
            <h2>Line Example</h2>
            <canvas id="chart1" ref="chart"/>
            </div>
        )
    }
    
}

