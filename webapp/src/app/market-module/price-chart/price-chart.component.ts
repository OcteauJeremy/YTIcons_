import { Component, Input, OnInit } from '@angular/core';

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
  }
}
