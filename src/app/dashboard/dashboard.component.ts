import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data1: any;

  options1: any;

  currentDate!: string;

  activeButton: number = 0;

  showData(buttonNumber: number) {
    this.activeButton = buttonNumber;
  }





  ngOnInit(): void {
    this.capacity();
    this.presentDate();
    this.another();
    this.REgeneration();
    this.Regeneration1();
    this.pieschart();
    this.capacitys();
    this.piescharts();
    this.barcharts();
    this.dataindia()


  }
  dataindia() {
    //@ts-ignore
    const chart = Highcharts.chart('data', {
      chart: {
        type: 'pie'
      },
      title: {
        text: '',
        align: 'left'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          '<b>{point.y} MU</b>' +
          '<b>({point.z}%)</b><br/>'
      },
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        borderRadius: 5,
        data: [{
          name: 'Northern',
          y: 1623,
          z: 51
        }, {
          name: 'Western',
          y: 2213,
          z: 42
        }, {
          name: 'Eastern',
          y: 442,
          z: 34
        },],
        colors: [
          '#4caefe',
          '#3dc3e8',
          '#2dd9db',
          '#1feeaf',
          '#0ff3a0',
          '#00e887',

        ]
      }]
    })




  }

  radar1() {
    //@ts-ignore
    const chart = Highcharts.chart('charts', {
      chart: {
        type: 'pie'
      },
      title: {
        text: '',
        align: 'left'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          '<b>{point.y} MU</b>' +
          '<b>({point.z}%)</b><br/>'
      },
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        borderRadius: 5,
        data: [{
          name: 'Northern',
          y: 1623,
          z: 51
        }, {
          name: 'Western',
          y: 2213,
          z: 42
        }, {
          name: 'Eastern',
          y: 442,
          z: 34
        }, {
          name: 'Czech Republic',
          y: 600,
          z: 28
        }, {
          name: 'Southern',
          y: 4568,
          z: 24
        }, {
          name: 'North-Eastern',
          y: 3456,
          z: 21
        },],
        colors: [
          '#4caefe',
          '#3dc3e8',
          '#2dd9db',
          '#1feeaf',
          '#0ff3a0',
          '#00e887',

        ]
      }]
    })




  }

  radar2() {
    //@ts-ignore
    const chart = Highcharts.chart('charts', {
      chart: {
        type: 'pie'
      },
      title: {
        text: '',
        align: 'left'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          '<b>{point.y} MU</b>' +
          '<b>({point.z}%)</b><br/>'
      },
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        borderRadius: 5,
        data: [{
          name: 'Northern',
          y: 400,
          z: 12
        }, {
          name: 'Western',
          y: 200,
          z: 25
        }, {
          name: 'Eastern',
          y: 1500,
          z: 64
        }, {
          name: 'Czech Republic',
          y: 2000,
          z: 56
        }, {
          name: 'Southern',
          y: 3000,
          z: 23
        }, {
          name: 'North-Eastern',
          y: 675,
          z: 39
        },],
        colors: [
          '#4caefe',
          '#3dc3e8',
          '#2dd9db',
          '#1feeaf',
          '#0ff3a0',
          '#00e887',

        ]
      }]
    })




  }
  
  radar3() {
    //@ts-ignore
    const chart = Highcharts.chart('charts', {
      chart: {
        type: 'pie'
      },
      title: {
        text: '',
        align: 'left'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          '<b>{point.y} MU</b>' +
          '<b>({point.z}%)</b><br/>'
      },
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        borderRadius: 5,
        data: [{
          name: 'Northern',
          y: 800,
          z: 24
        }, {
          name: 'Western',
          y: 400,
          z: 50
        }, {
          name: 'Eastern',
          y: 3000,
          z: 46
        }, {
          name: 'Czech Republic',
          y: 4000,
          z: 65
        }, {
          name: 'Southern',
          y: 6000,
          z: 32
        }, {
          name: 'North-Eastern',
          y: 567,
          z: 78
        },],
        colors: [
          '#4caefe',
          '#3dc3e8',
          '#2dd9db',
          '#1feeaf',
          '#0ff3a0',
          '#00e887',

        ]
      }]
    })




  }

  radar4() {
    //@ts-ignore
    const chart = Highcharts.chart('charts', {
      chart: {
        type: 'pie'
      },
      title: {
        text: '',
        align: 'left'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          '<b>{point.y} MU</b>' +
          '<b>({point.z}%)</b><br/>'
      },
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        borderRadius: 5,
        data: [{
          name: 'Northern',
          y: 1600,
          z: 44
        }, {
          name: 'Western',
          y: 800,
          z: 100
        }, {
          name: 'Eastern',
          y: 1567,
          z: 64
        }, {
          name: 'Czech Republic',
          y: 2456,
          z: 58
        }, {
          name: 'Southern',
          y: 9876,
          z: 34
        }, {
          name: 'North-Eastern',
          y: 700,
          z: 45
        },],
        colors: [
          '#4caefe',
          '#3dc3e8',
          '#2dd9db',
          '#1feeaf',
          '#0ff3a0',
          '#00e887',

        ]
      }]
    })




  }

  radar5() {
    //@ts-ignore
    const chart = Highcharts.chart('charts', {
      chart: {
        type: 'pie'
      },
      title: {
        text: '',
        align: 'left'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          '<b>{point.y} MU</b>' +
          '<b>({point.z}%)</b><br/>'
      },
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        borderRadius: 5,
        data: [{
          name: 'Northern',
          y: 300,
          z: 25
        }, {
          name: 'Western',
          y: 1600,
          z: 50
        }, {
          name: 'Eastern',
          y: 500,
          z: 82
        }, {
          name: 'Czech Republic',
          y: 4568,
          z: 34
        }, {
          name: 'Southern',
          y: 6784,
          z: 21
        }, {
          name: 'North-Eastern',
          y: 1400,
          z: 13
        },],
        colors: [
          '#4caefe',
          '#3dc3e8',
          '#2dd9db',
          '#1feeaf',
          '#0ff3a0',
          '#00e887',

        ]
      }]
    })
  }

  radar6() {
    //@ts-ignore
    const chart = Highcharts.chart('charts', {
      chart: {
        type: 'pie'
      },
      title: {
        text: '',
        align: 'left'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          '<b>{point.y} MU</b>' +
          '<b>({point.z}%)</b><br/>'
      },
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        borderRadius: 5,
        data: [{
          name: 'Northern',
          y: 600,
          z: 53
        }, {
          name: 'Western',
          y: 2308,
          z: 51
        }, {
          name: 'Eastern',
          y: 2342,
          z: 34
        }, {
          name: 'Czech Republic',
          y: 5432,
          z: 24
        }, {
          name: 'Southern',
          y: 6575,
          z: 34
        }, {
          name: 'North-Eastern',
          y: 2789,
          z: 34
        },],
        colors: [
          '#4caefe',
          '#3dc3e8',
          '#2dd9db',
          '#1feeaf',
          '#0ff3a0',
          '#00e887',

        ]
      }]
    })
  }

  capacity() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data1 = {
      labels: ['Wind', 'Other', 'Solar'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.options1 = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }
  presentDate() {
    const today = new Date();
    this.currentDate = today.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  another() {
    //@ts-ignore
    const chart = Highcharts.chart('curve', {

      title: {
        text: '',
        align: 'left'
      },

      subtitle: {
        align: 'left'
      },

      yAxis: {
        title: {
          text: 'MW'
        }
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2010 to 2020'
        }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },

      series: [{
        name: 'Wind',
        data: [43934, 48656, 65165, 81827, 112143, 142383,
          171533, 165174, 155157, 161454, 154610]
      }, {
        name: 'Solar',
        data: [24916, 37941, 29742, 29851, 32490, 30282,
          38121, 36885, 33726, 34243, 31050]
      },  ],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'vertical',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }

    });
  }

  REgeneration() {
    //@ts-ignore
    const chart = Highcharts.chart('generation', {
      chart: {
        type: 'spline'
      },
      title: {
        text: ''
      },

      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the year
          month: '%e. %b',
          year: '%b'
        },
        title: {
          text: 'Date'
        }
      },
      yAxis: {
        title: {
          text: 'MU'
        },
        min: 0
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} MU'
      },

      plotOptions: {
        series: {
          marker: {
            enabled: true,
            radius: 2.5
          }
        }
      },

      colors: ['#6CF', '#39F', '#06C', '#036', '#000'],

      // Define the data points. All series have a year of 1970/71 in order
      // to be compared on the same x axis. Note that in JavaScript, months start
      // at 0 for January, 1 for February etc.
      series: [
        {
          name: 'Solar',
          data: [
            [Date.UTC(1970, 9, 24), 0],
            [Date.UTC(1970, 9, 27), 0.12],
            [Date.UTC(1970, 9, 30), 0.09],
            [Date.UTC(1970, 10, 3), 0.13],
            [Date.UTC(1970, 10, 6), 0.12],
            [Date.UTC(1970, 10, 9), 0.13],
            [Date.UTC(1970, 10, 12), 0.13],
            [Date.UTC(1970, 10, 15), 0.16],
            [Date.UTC(1970, 10, 18), 0.19],
            [Date.UTC(1970, 10, 21), 0.25],
            [Date.UTC(1970, 10, 24), 0.26],
            [Date.UTC(1970, 10, 27), 0.24],
            [Date.UTC(1970, 10, 30), 0.25],
            [Date.UTC(1970, 11, 3), 0.26],
            [Date.UTC(1970, 11, 6), 0.36],
            [Date.UTC(1970, 11, 9), 0.43],
            [Date.UTC(1970, 11, 12), 0.32],
            [Date.UTC(1970, 11, 15), 0.48],
            [Date.UTC(1970, 11, 18), 0.5],
            [Date.UTC(1970, 11, 21), 0.44],
            [Date.UTC(1970, 11, 24), 0.43],
            [Date.UTC(1970, 11, 27), 0.45],
            [Date.UTC(1970, 11, 30), 0.4],
            [Date.UTC(1971, 0, 3), 0.39],
            [Date.UTC(1971, 0, 6), 0.56],
            [Date.UTC(1971, 0, 9), 0.57],
            [Date.UTC(1971, 0, 12), 0.68],
            [Date.UTC(1971, 0, 15), 0.93],
            [Date.UTC(1971, 0, 18), 1.11],
            [Date.UTC(1971, 0, 21), 1.01],
            [Date.UTC(1971, 0, 24), 0.99],
            [Date.UTC(1971, 0, 27), 1.17],
            [Date.UTC(1971, 0, 30), 1.24],
            [Date.UTC(1971, 1, 3), 1.41],
            [Date.UTC(1971, 1, 6), 1.47],
            [Date.UTC(1971, 1, 9), 1.4],
            [Date.UTC(1971, 1, 12), 1.92],
            [Date.UTC(1971, 1, 15), 2.03],
            [Date.UTC(1971, 1, 18), 2.46],
            [Date.UTC(1971, 1, 21), 2.53],
            [Date.UTC(1971, 1, 24), 2.73],
            [Date.UTC(1971, 1, 27), 2.67],
            [Date.UTC(1971, 2, 3), 2.65],
            [Date.UTC(1971, 2, 6), 2.62],
            [Date.UTC(1971, 2, 9), 2.79],
            [Date.UTC(1971, 2, 13), 2.93],
            [Date.UTC(1971, 2, 20), 3.09],
            [Date.UTC(1971, 2, 27), 2.76],
            [Date.UTC(1971, 2, 30), 2.73],
            [Date.UTC(1971, 3, 4), 2.9],
            [Date.UTC(1971, 3, 9), 2.77],
            [Date.UTC(1971, 3, 12), 2.78],
            [Date.UTC(1971, 3, 15), 2.76],
            [Date.UTC(1971, 3, 18), 2.76],
            [Date.UTC(1971, 3, 21), 2.7],
            [Date.UTC(1971, 3, 24), 2.61],
            [Date.UTC(1971, 3, 27), 2.52],
            [Date.UTC(1971, 3, 30), 2.53],
            [Date.UTC(1971, 4, 3), 2.55],
            [Date.UTC(1971, 4, 6), 2.52],
            [Date.UTC(1971, 4, 9), 2.44],
            [Date.UTC(1971, 4, 12), 2.43],
            [Date.UTC(1971, 4, 15), 2.43],
            [Date.UTC(1971, 4, 18), 2.48],
            [Date.UTC(1971, 4, 21), 2.41],
            [Date.UTC(1971, 4, 24), 2.16],
            [Date.UTC(1971, 4, 27), 2.01],
            [Date.UTC(1971, 4, 30), 1.88],
            [Date.UTC(1971, 5, 2), 1.62],
            [Date.UTC(1971, 5, 6), 1.43],
            [Date.UTC(1971, 5, 9), 1.3],
            [Date.UTC(1971, 5, 12), 1.11],
            [Date.UTC(1971, 5, 15), 0.84],
            [Date.UTC(1971, 5, 18), 0.54],
            [Date.UTC(1971, 5, 21), 0.19],
            [Date.UTC(1971, 5, 23), 0]
          ]
        }, {
          name: 'Wind',
          data: [
            [Date.UTC(1970, 10, 14), 0],
            [Date.UTC(1970, 11, 6), 0.35],
            [Date.UTC(1970, 11, 13), 0.35],
            [Date.UTC(1970, 11, 20), 0.33],
            [Date.UTC(1970, 11, 30), 0.53],
            [Date.UTC(1971, 0, 13), 0.62],
            [Date.UTC(1971, 0, 20), 0.6],
            [Date.UTC(1971, 1, 2), 0.69],
            [Date.UTC(1971, 1, 18), 0.67],
            [Date.UTC(1971, 1, 21), 0.65],
            [Date.UTC(1971, 1, 24), 0.66],
            [Date.UTC(1971, 1, 27), 0.66],
            [Date.UTC(1971, 2, 3), 0.61],
            [Date.UTC(1971, 2, 6), 0.6],
            [Date.UTC(1971, 2, 9), 0.69],
            [Date.UTC(1971, 2, 12), 0.66],
            [Date.UTC(1971, 2, 15), 0.75],
            [Date.UTC(1971, 2, 18), 0.76],
            [Date.UTC(1971, 2, 21), 0.75],
            [Date.UTC(1971, 2, 24), 0.69],
            [Date.UTC(1971, 2, 27), 0.82],
            [Date.UTC(1971, 2, 30), 0.86],
            [Date.UTC(1971, 3, 3), 0.81],
            [Date.UTC(1971, 3, 6), 1],
            [Date.UTC(1971, 3, 9), 1.15],
            [Date.UTC(1971, 3, 10), 1.35],
            [Date.UTC(1971, 3, 12), 1.26],
            [Date.UTC(1971, 3, 15), 1.18],
            [Date.UTC(1971, 3, 18), 1.14],
            [Date.UTC(1971, 3, 21), 1.04],
            [Date.UTC(1971, 3, 24), 1.06],
            [Date.UTC(1971, 3, 27), 1.05],
            [Date.UTC(1971, 3, 30), 1.03],
            [Date.UTC(1971, 4, 3), 1.01],
            [Date.UTC(1971, 4, 6), 0.98],
            [Date.UTC(1971, 4, 9), 0.94],
            [Date.UTC(1971, 4, 12), 0.8],
            [Date.UTC(1971, 4, 15), 0.61],
            [Date.UTC(1971, 4, 18), 0.43],
            [Date.UTC(1971, 4, 21), 0.29],
            [Date.UTC(1971, 4, 24), 0.1],
            [Date.UTC(1971, 4, 26), 0]
          ]
        }, {
          name: 'Other',
          data: [
            [Date.UTC(1970, 10, 5), 0],
            [Date.UTC(1970, 10, 12), 0.1],
            [Date.UTC(1970, 10, 21), 0.15],
            [Date.UTC(1970, 10, 22), 0.19],
            [Date.UTC(1970, 10, 27), 0.17],
            [Date.UTC(1970, 10, 30), 0.27],
            [Date.UTC(1970, 11, 2), 0.25],
            [Date.UTC(1970, 11, 4), 0.27],
            [Date.UTC(1970, 11, 5), 0.26],
            [Date.UTC(1970, 11, 6), 0.25],
            [Date.UTC(1970, 11, 7), 0.26],
            [Date.UTC(1970, 11, 8), 0.26],
            [Date.UTC(1970, 11, 9), 0.25],
            [Date.UTC(1970, 11, 10), 0.25],
            [Date.UTC(1970, 11, 11), 0.25],
            [Date.UTC(1970, 11, 12), 0.26],
            [Date.UTC(1970, 11, 22), 0.22],
            [Date.UTC(1970, 11, 23), 0.22],
            [Date.UTC(1970, 11, 24), 0.22],
            [Date.UTC(1970, 11, 25), 0.24],
            [Date.UTC(1970, 11, 26), 0.24],
            [Date.UTC(1970, 11, 27), 0.24],
            [Date.UTC(1970, 11, 28), 0.24],
            [Date.UTC(1970, 11, 29), 0.24],
            [Date.UTC(1970, 11, 30), 0.22],
            [Date.UTC(1970, 11, 31), 0.18],
            [Date.UTC(1971, 0, 1), 0.17],
            [Date.UTC(1971, 0, 2), 0.23],
            [Date.UTC(1971, 0, 9), 0.5],
            [Date.UTC(1971, 0, 10), 0.5],
            [Date.UTC(1971, 0, 11), 0.53],
            [Date.UTC(1971, 0, 12), 0.48],
            [Date.UTC(1971, 0, 13), 0.4],
            [Date.UTC(1971, 0, 17), 0.36],
            [Date.UTC(1971, 0, 22), 0.69],
            [Date.UTC(1971, 0, 23), 0.62],
            [Date.UTC(1971, 0, 29), 0.72],
            [Date.UTC(1971, 1, 2), 0.95],
            [Date.UTC(1971, 1, 10), 1.73],
            [Date.UTC(1971, 1, 15), 1.76],
            [Date.UTC(1971, 1, 26), 2.18],
            [Date.UTC(1971, 2, 2), 2.22],
            [Date.UTC(1971, 2, 6), 2.13],
            [Date.UTC(1971, 2, 8), 2.11],
            [Date.UTC(1971, 2, 9), 2.12],
            [Date.UTC(1971, 2, 10), 2.11],
            [Date.UTC(1971, 2, 11), 2.09],
            [Date.UTC(1971, 2, 12), 2.08],
            [Date.UTC(1971, 2, 13), 2.08],
            [Date.UTC(1971, 2, 14), 2.07],
            [Date.UTC(1971, 2, 15), 2.08],
            [Date.UTC(1971, 2, 17), 2.12],
            [Date.UTC(1971, 2, 18), 2.19],
            [Date.UTC(1971, 2, 21), 2.11],
            [Date.UTC(1971, 2, 24), 2.1],
            [Date.UTC(1971, 2, 27), 1.89],
            [Date.UTC(1971, 2, 30), 1.92],
            [Date.UTC(1971, 3, 3), 1.9],
            [Date.UTC(1971, 3, 6), 1.95],
            [Date.UTC(1971, 3, 9), 1.94],
            [Date.UTC(1971, 3, 12), 2],
            [Date.UTC(1971, 3, 15), 1.9],
            [Date.UTC(1971, 3, 18), 1.84],
            [Date.UTC(1971, 3, 21), 1.75],
            [Date.UTC(1971, 3, 24), 1.69],
            [Date.UTC(1971, 3, 27), 1.64],
            [Date.UTC(1971, 3, 30), 1.64],
            [Date.UTC(1971, 4, 3), 1.58],
            [Date.UTC(1971, 4, 6), 1.52],
            [Date.UTC(1971, 4, 9), 1.43],
            [Date.UTC(1971, 4, 12), 1.42],
            [Date.UTC(1971, 4, 15), 1.37],
            [Date.UTC(1971, 4, 18), 1.26],
            [Date.UTC(1971, 4, 21), 1.11],
            [Date.UTC(1971, 4, 24), 0.92],
            [Date.UTC(1971, 4, 27), 0.75],
            [Date.UTC(1971, 4, 30), 0.55],
            [Date.UTC(1971, 5, 3), 0.35],
            [Date.UTC(1971, 5, 6), 0.21],
            [Date.UTC(1971, 5, 9), 0]
          ]
        }
      ]
    });
  }

  Regeneration1() {
    //@ts-ignore
    Highcharts.chart('generation1', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Monthly Average Temperature'
      },
      subtitle: {
        
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
          description: 'Months of the year'
        }
      },
      yAxis: {
        title: {
          text: 'Temperature'
        },
        labels: {
          formatter: function () {
            return this.value + '°';
          }
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [{
        name: 'Wind',
        marker: {
          symbol: 'square'
        },
        data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
          y: 26.4,
          marker: {
            symbol: ''
          },
          accessibility: {
            description: 'Sunny symbol, this is the warmest point in the chart.'
          }
        }, 22.8, 17.5, 12.1, 7.6, 18.3, 19.2, 13.2, 23.2, 15.6]

      }, {
        name: 'Solar',
        marker: {
          symbol: 'diamond'
        },
        data: [{
          y: 1.5,
          marker: {
            symbol: ''
          },
          accessibility: {
            description: 'Snowy symbol, this is the coldest point in the chart.'
          }
        }, 1.3, 3.4, 2.3, 4.5, 5.6, 7.6, 8.6, 9.4, 10.4, 12.6, 21.3, 5.6, 7.6, 8.6, 9.4]
      },
      {
        name: 'Biomass',
        marker: {
          symbol: 'diamond'
        },
        data: [{
          y: 1.5,
          marker: {
            symbol: ''
          },
          accessibility: {
            description: 'Snowy symbol, this is the coldest point in the chart.'
          }
        }, 2.5, 3.6, 1.3, 2.4, 6.7, 1.3, 11.3, 12.3, 13.4, 2.4, 6.7, 1.3, 11.3]
      }, {
        name: 'Bagassej',
        marker: {
          symbol: 'diamond'
        },
        data: [{
          y: 1.5,
          marker: {
            symbol: ''
          },
          accessibility: {
            description: ''
          }
        }, 1.2, 3.2, 2.3, 3.9, 4.5, 6.7, 7.4, 6.9, 8.9, 10.5, 12.3, 14.5, 16.3, 22.3, 21.1, 23.4]
      }, {
        name: 'small Hydel',
        marker: {
          symbol: 'diamond'
        },
        data: [{
          y: 1.5,
          marker: {
            symbol: ''
          },
          accessibility: {
            description: 'Snowy symbol, this is the coldest point in the chart.'
          }
        }, 2.5, 3.6, 1.3, 2.4, 6.7, 1.3, 11.3, 12.3, 13.4, 1.3, 2.4, 6.7, 1]
      }, {
        name: 'Others',
        marker: {
          symbol: 'diamond'
        },
        data: [{
          y: 1.5,
          marker: {
            symbol: ''
          },
          accessibility: {
            description: 'Snowy symbol, this is the coldest point in the chart.'
          }
        }, 2.5, 3.6, 1.3, 2.4, 6.7, 1.3, 11.3, 12.3, 13.4, 2.5, 3.6, 1.3, 2]
      }]
    });
  }
  pieschart() {
    //@ts-ignore
    const chart = Highcharts.chart('charts', {
      chart: {
        type: 'pie'
      },
      title: {
        text: '',
        align: 'left'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          '<b>{point.y} MU</b>' +
          '<b>({point.z}%)</b><br/>'
      },
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        borderRadius: 5,
        data: [{
          name: 'Northern',
          y: 1162,
          z: 15
        }, {
          name: 'Western',
          y: 2261,
          z: 24
        }, {
          name: 'Eastern',
          y: 1156,
          z: 56
        }, {
          name: 'Czech Republic',
          y: 975,
          z: 26
        }, {
          name: 'Southern',
          y: 247,
          z: 23
        }, {
          name: 'North-Eastern',
          y: 2314,
          z: 45
        },],
        colors: [
          '#4caefe',
          '#3dc3e8',
          '#2dd9db',
          '#1feeaf',
          '#0ff3a0',
          '#00e887',

        ]
      }]
    });
  }

  
capacitys(){
  //@ts-ignore
  Highcharts.chart('capa', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
       
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
            60.0, 28.6, 32.1],
        tooltip: {
            valueSuffix: 'MW'
        }

    },
    // {
    //   name: 'Temperature',
    //   type: 'column',
    //   data: [23.6,66.77,34.5,23.5,65.4,78.6,90.2,23.5,12.4,45.2,78.4,23.1],
    //   tooltip: {
    //       valueSuffix: 'MW'
    //   }

    // },
     {
        name: 'All',
        type: 'spline',
        data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
            -0.7, -11.0, -16.4],
        tooltip: {
            valueSuffix: 'MW'
        }
    },]
});
}

pies1(){
  //@ts-ignore
  Highcharts.chart('capa', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
        
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [28.4, 45.6, 51.7, 39.0,27.6, 28.8, 21.7, 34.1, 29.0, 
            60.0, 28.6, 32.1],
        tooltip: {
            valueSuffix: 'MW'
        }

    },
    {
      name: 'All',
      type: 'column',
      data: [23.6,66.77,34.5,23.5,65.4,78.6,90.2,23.5,12.4,45.2,78.4,23.1],
      tooltip: {
          valueSuffix: 'MW'
      }

    },
     {
        name: 'RE Power',
        type: 'spline',
        data: [ 3.1, 13.0, 14.5, 10.8, 5.8,
            -0.7, -11.0, -16.4,-13.6, -14.9, -5.8, -0.7],
        tooltip: {
            valueSuffix: 'MW'
        }
    },]
});
}

pies2(){
  //@ts-ignore
  Highcharts.chart('capa', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
       
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [29.0, 28.4, 45.6, 51.7, 39.0,27.6, 28.8, 21.7, 34.1, 
            60.0, 28.6, 32.1],
        tooltip: {
            valueSuffix: 'MW'
        }

    },
    {
      name: 'All',
      type: 'column',
      data: [90.2,23.5,12.4,45.2,78.4,23.1,23.6,66.77,34.5,23.5,65.4,78.6],
      tooltip: {
          valueSuffix: 'MW'
      }

    },
    //  {
    //     name: 'All',
    //     type: 'spline',
    //     data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
    //         -0.7, -11.0, -16.4],
    //     tooltip: {
    //         valueSuffix: 'MW'
    //     }
    // },
  ]
});
}

pies3(){
  //@ts-ignore
  Highcharts.chart('capa', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
      
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
            60.0, 28.6, 32.1],
        tooltip: {
            valueSuffix: 'MW'
        }

    },
    // {
    //   name: 'Temperature',
    //   type: 'column',
    //   data: [23.6,66.77,34.5,23.5,65.4,78.6,90.2,23.5,12.4,45.2,78.4,23.1],
    //   tooltip: {
    //       valueSuffix: 'MW'
    //   }

    // },
     {
        name: 'All',
        type: 'spline',
        data: [-13.6, -14.9, -5.8, -0.7, 
            -0.7, -11.0, -16.4,3.1, 13.0, 14.5, 10.8, 5.8],
        tooltip: {
            valueSuffix: 'MW'
        }
    },]
});
}

pies4(){
  //@ts-ignore
  Highcharts.chart('capa', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
       
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [ 45.6, 51.7, 39.0,
            60.0, 28.6, 32.1,27.6, 28.8, 21.7, 34.1, 29.0, 28.4],
        tooltip: {
            valueSuffix: 'MW'
        }

    },
    {
      name: 'All',
      type: 'column',
      data: [23.6,66.77,34.5,23.5,65.4,78.6,90.2,23.5,12.4,45.2,78.4,23.1],
      tooltip: {
          valueSuffix: 'MW'
      }

    },
    //  {
    //     name: 'All',
    //     type: 'spline',
    //     data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
    //         -0.7, -11.0, -16.4],
    //     tooltip: {
    //         valueSuffix: 'MW'
    //     }
    // },
  ]
});
}

pies5(){
  //@ts-ignore
  Highcharts.chart('capa', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
     
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
            60.0, 28.6, 32.1],
        tooltip: {
            valueSuffix: 'MW'
        }

    },
    // {
    //   name: 'Temperature',
    //   type: 'column',
    //   data: [23.6,66.77,34.5,23.5,65.4,78.6,90.2,23.5,12.4,45.2,78.4,23.1],
    //   tooltip: {
    //       valueSuffix: 'MW'
    //   }

    // },
     {
        name: 'All',
        type: 'spline',
        data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
            -0.7, -11.0, -16.4],
        tooltip: {
            valueSuffix: 'MW'
        }
    },]
});
}
piescharts() {
  //@ts-ignore
  const chart = Highcharts.chart('chart', {
    chart: {
      type: 'pie'
    },
    title: {
      text: '',
      align: 'left'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        '<b>{point.y} MU</b>' +
        '<b>({point.z}%)</b><br/>'
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      borderRadius: 5,
      data: [{
        name: 'Northern',
        y: 1162,
        z: 15
      }, {
        name: 'Western',
        y: 2261,
        z: 24
      }, {
        name: 'Eastern',
        y: 1156,
        z: 56
      }, {
        name: 'Czech Republic',
        y: 975,
        z: 26
      }, {
        name: 'Southern',
        y: 247,
        z: 23
      }, {
        name: 'North-Eastern',
        y: 2314,
        z: 45
      },],
      colors: [
        '#1cc94a',
        '#3b5394',
        '#73ccde',
        '#1feeaf',
        '#0ff3a0',
        '#00e887',

      ]
    }]
  });
}

pieschart1(){
   //@ts-ignore
   const chart = Highcharts.chart('chart', {
    chart: {
      type: 'pie'
    },
    title: {
      text: '',
      align: 'left'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        '<b>{point.y} MU</b>' +
        '<b>({point.z}%)</b><br/>'
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      borderRadius: 5,
      data: [{
        name: 'Northern',
        y: 500,
        z: 45
      }, {
        name: 'Western',
        y: 2600,
        z: 10
      }, {
        name: 'Eastern',
        y: 100,
        z: 13
      }, {
        name: 'Czech Republic',
        y: 2000,
        z: 63
      }, {
        name: 'Southern',
        y: 345,
        z: 67
      }, {
        name: 'North-Eastern',
        y: 1896,
        z: 23
      },],
      colors: [
        '#1cc94a',
        '#3b5394',
        '#73ccde',
        '#1feeaf',
        '#0ff3a0',
        '#00e887',

      ]
    }]
  });

}

pieschart2(){
  //@ts-ignore
  const chart = Highcharts.chart('chart', {
    chart: {
      type: 'pie'
    },
    title: {
      text: '',
      align: 'left'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        '<b>{point.y} MU</b>' +
        '<b>({point.z}%)</b><br/>'
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      borderRadius: 5,
      data: [{
        name: 'Northern',
        y: 1000,
        z: 36
      }, {
        name: 'Western',
        y: 1600,
        z: 23
      }, {
        name: 'Eastern',
        y: 300,
        z: 86
      }, {
        name: 'Czech Republic',
        y: 268,
        z: 47
      }, {
        name: 'Southern',
        y: 298,
        z: 50
      }, {
        name: 'North-Eastern',
        y: 1896,
        z: 23
      },],
      colors: [
        '#1cc94a',
        '#3b5394',
        '#73ccde',
        '#1feeaf',
        '#0ff3a0',
        '#00e887',

      ]
    }]
  });

}

pieschart3(){
  //@ts-ignore
  const chart = Highcharts.chart('chart', {
    chart: {
      type: 'pie'
    },
    title: {
      text: '',
      align: 'left'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        '<b>{point.y} MU</b>' +
        '<b>({point.z}%)</b><br/>'
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      borderRadius: 5,
      data: [{
        name: 'Northern',
        y: 350,
        z: 98,
      }, {
        name: 'Western',
        y: 590,
        z: 56
      }, {
        name: 'Eastern',
        y: 890,
        z: 40
      }, {
        name: 'Czech Republic',
        y: 700,
        z: 56
      }, {
        name: 'Southern',
        y: 1000,
        z: 96
      }, {
        name: 'North-Eastern',
        y: 1896,
        z: 23
      },],
      colors: [
        '#1cc94a',
        '#3b5394',
        '#73ccde',
        '#1feeaf',
        '#0ff3a0',
        '#00e887',

      ]
    }]
  });

}
pieschart4(){
  //@ts-ignore
  const chart = Highcharts.chart('chart', {
    chart: {
      type: 'pie'
    },
    title: {
      text: '',
      align: 'left'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        '<b>{point.y} MU</b>' +
        '<b>({point.z}%)</b><br/>'
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      borderRadius: 5,
      data: [{
        name: 'Northern',
        y: 100,
        z: 45,
      }, {
        name: 'Western',
        y: 1000,
        z: 86
      }, {
        name: 'Eastern',
        y: 1579,
        z: 56
      }, {
        name: 'Czech Republic',
        y: 600,
        z: 92
      }, {
        name: 'Southern',
        y: 345,
        z: 79
      }, {
        name: 'North-Eastern',
        y: 900,
        z: 45
      },],
      colors: [
        '#1cc94a',
        '#3b5394',
        '#73ccde',
        '#1feeaf',
        '#0ff3a0',
        '#00e887',

      ]
    }]
  });
}

pieschart5(){
  //@ts-ignore
  const chart = Highcharts.chart('chart', {
    chart: {
      type: 'pie'
    },
    title: {
      text: '',
      align: 'left'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        '<b>{point.y} MU</b>' +
        '<b>({point.z}%)</b><br/>'
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      borderRadius: 5,
      data: [{
        name: 'Northern',
        y: 500,
        z: 45,
      }, {
        name: 'Western',
        y: 500,
        z: 86
      }, {
        name: 'Eastern',
        y: 700,
        z: 45
      }, {
        name: 'Czech Republic',
        y: 300,
        z: 29
      }, {
        name: 'Southern',
        y: 900,
        z: 89
      }, {
        name: 'North-Eastern',
        y: 200,
        z: 67
      },],
      colors: [
        '#1cc94a',
        '#3b5394',
        '#73ccde',
        '#1feeaf',
        '#0ff3a0',
        '#00e887',

      ]
    }]
  });

}

pieschart6(){
  //@ts-ignore
  const chart = Highcharts.chart('chart', {
    chart: {
      type: 'pie'
    },
    title: {
      text: '',
      align: 'left'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        '<b>{point.y} MU</b>' +
        '<b>({point.z}%)</b><br/>'
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      borderRadius: 5,
      data: [{
        name: 'Northern',
        y: 170,
        z: 28,
      }, {
        name: 'Western',
        y: 555,
        z: 83
      }, {
        name: 'Eastern',
        y: 200,
        z: 45
      }, {
        name: 'Czech Republic',
        y: 678,
        z: 29
      }, {
        name: 'Southern',
        y: 1000,
        z: 89
      }, {
        name: 'North-Eastern',
        y: 150,
        z: 67
      },],
      colors: [
        '#1cc94a',
        '#3b5394',
        '#73ccde',
        '#1feeaf',
        '#0ff3a0',
        '#00e887',

      ]
    }]
  });

}


barcharts(){
  //@ts-ignore
  Highcharts.chart('bar', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
       
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
            60.0, 28.6, 32.1],
        tooltip: {
            valueSuffix: 'MW'
        },
        color:'red'

    },
    {
      name: 'Temperature',
      type: 'column',
      data: [23.6,66.77,34.5,23.5,65.4,78.6,90.2,23.5,12.4,45.2,78.4,23.1],
      tooltip: {
          valueSuffix: 'MW'
      }

    },
  ]
});
}

barcharts1(){
   //@ts-ignore
   Highcharts.chart('bar', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
       
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [ 60.0, 28.6, 32.1,27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
           ],
        tooltip: {
            valueSuffix: 'MW'
        },
        color:'red'

    },
    {
      name: 'Temperature',
      type: 'column',
      data: [90.2,23.5,12.4,45.2,78.4,23.1,23.6,66.77,34.5,23.5,65.4,78.6,],
      tooltip: {
          valueSuffix: 'MW'
      }

    },
  ]
});

}

barcharts2(){
   //@ts-ignore
   Highcharts.chart('bar', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
       
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [ 27.6, 28.8, 21.7, 34.1, 29.0,60.0, 28.6, 32.1, 28.4, 45.6, 51.7, 39.0,
           ],
        tooltip: {
            valueSuffix: 'MW'
        },
        color:'red'

    },
    {
      name: 'Temperature',
      type: 'column',
      data: [78.4,23.1,23.6,66.77,90.2,23.5,12.4,45.2,34.5,23.5,65.4,78.6,],
      tooltip: {
          valueSuffix: 'MW'
      }

    },
  ]
});
}

barcharts3(){
  //@ts-ignore
  Highcharts.chart('bar', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
       
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [  28.6, 32.1, 28.4, 45.6, 51.7, 39.0,27.6, 28.8, 21.7, 34.1, 29.0,60.0,
           ],
        tooltip: {
            valueSuffix: 'MW'
        },
        color:'red'

    },
    {
      name: 'Temperature',
      type: 'column',
      data: [90.2,23.5,12.4,45.2,34.5,23.5,78.4,23.1,23.6,66.77,65.4,78.6],
      tooltip: {
          valueSuffix: 'MW'
      }

    },
  ]
});
}

barcharts4(){
    //@ts-ignore
    Highcharts.chart('bar', {
      chart: {
          zoomType: 'xy'
      },
      title: {
          text: '',
          align: 'left'
      },
      subtitle: {
         
      },
      xAxis: [{
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          crosshair: true
      }],
      yAxis: [{ // Primary yAxis
          labels: {
              format: '{value}°C',
              style: {
                //@ts-ignore
                  color: Highcharts.getOptions().colors[1]
              }
          },
          title: {
              text: '<b> MW </b>',
              style: {
                //@ts-ignore
                  color: Highcharts.getOptions().colors[6]
              }
          }
      }, { // Secondary yAxis
          title: {
              text: '',
              style: {
                //@ts-ignore
                  color: Highcharts.getOptions().colors[0]
              }
          },
          labels: {
              format: '{value} mm',
              style: {
                //@ts-ignore
                  color: Highcharts.getOptions().colors[0]
              }
          },
          opposite: true
      }],
      tooltip: {
          shared: true
      },
      legend: {
          align: 'left',
          x: 80,
          verticalAlign: 'top',
          y: 80,
          floating: true,
          backgroundColor:
          //@ts-ignore
              Highcharts.defaultOptions.legend.backgroundColor || // theme
              'rgba(255,255,255,0.25)'
      },
      series: [{
          name: 'Solar',
          type: 'column',
          yAxis: 1,
          data: [ 39.0,27.6, 28.8, 21.7,28.6, 32.1, 28.4, 45.6, 51.7, 34.1, 29.0,60.0,
             ],
          tooltip: {
              valueSuffix: 'MW'
          },
          color:'red'
  
      },
      {
        name: 'Temperature',
        type: 'column',
        data: [90.2,23.5,12.4,45.2,34.5,66.77,65.4,78.6,23.5,78.4,23.1,23.6],
        tooltip: {
            valueSuffix: 'MW'
        }
  
      },
    ]
  });
}

barcharts5(){
   //@ts-ignore
   Highcharts.chart('bar', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
       
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [  28.4, 45.6, 51.7, 34.1, 29.0,60.0,39.0,27.6, 28.8, 21.7,28.6, 32.1
           ],
        tooltip: {
            valueSuffix: 'MW'
        },
        color:'red'

    },
    {
      name: 'Temperature',
      type: 'column',
      data: [90.2,23.5,12.4,45.2,34.5,23.6,66.77,65.4,78.6,23.5,78.4,23.1],
      tooltip: {
          valueSuffix: 'MW'
      }

    },
  ]
});
}

barcharts6(){
   //@ts-ignore
   Highcharts.chart('bar', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
       
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '<b> MW </b>',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[6]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
              //@ts-ignore
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor:
        //@ts-ignore
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Solar',
        type: 'column',
        yAxis: 1,
        data: [  28.8, 21.7,28.6, 32.1, 28.4, 45.6, 51.7, 34.1, 29.0,60.0,39.0,27.6,
           ],
        tooltip: {
            valueSuffix: 'MW'
        },
        color:'red'

    },
    {
      name: 'Temperature',
      type: 'column',
      data: [78.6,23.5,78.4,23.1,90.2,23.5,12.4,45.2,34.5,23.6,66.77,65.4,],
      tooltip: {
          valueSuffix: 'MW'
      }

    },
  ]
});

}
}       