import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';

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
    console.log(this.datas);

    var ctx = document.getElementById("chart-" + this.card.id);
    console.log(ctx);
    // var myChart = new Chart(ctx, {
    //   type: 'line',
    //   data: this.datas
    // });
  }
}
