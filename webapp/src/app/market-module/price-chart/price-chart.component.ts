<<<<<<< HEAD
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> 1c0c6481523fe35a501e8cf93569481f8694c381

@Component({
  selector: 'price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {

  @Input("card")  card;

  public datas = [];

  constructor() {
  }

  ngOnInit() {
    for (let tx of this.card.transactions) {
      this.datas.push(tx.price);
    }
    this.datas.push(this.card.price);
<<<<<<< HEAD
    console.log(this.datas);

    var ctx = document.getElementById("chart-" + this.card.id);
    console.log(ctx);
    // var myChart = new Chart(ctx, {
    //   type: 'line',
    //   data: this.datas
    // });
=======
>>>>>>> 1c0c6481523fe35a501e8cf93569481f8694c381
  }
}
