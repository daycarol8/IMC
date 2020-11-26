import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  constructor() { }

  ionViewDidEnter() {
    this.createBarChart([2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17], ['25/12', '02/05', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8']);
  }

  createBarChart(valores: any, datas: any) {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: datas,
        datasets: [{
          label: 'IMC',
          data: valores,
          backgroundColor: 'rgb(0, 0, 0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
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
    });
  }

}
