import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../models/Card';
import { CardService } from '../../services/card.service';
import { Subscription } from 'rxjs/Subscription';
import { TypeService } from '../../services/type.service';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit, OnDestroy {

  public  cards = [];
  public  types = [];
  public  followers = ['0 - 50K', '50K - 100k', '100k - 500K','500k - 1M','1M - 10M','More than 10M'];
  public  videos = ['0 - 100', '100 - 500', '500 - 1 000','1 000 - 10 000','10 000 - 100 000','More than 100 000'];


  private subscribtions: Subscription = new Subscription();
  private maxPages = 0;
  private search: string;

  private filters = {
    page: 1,
    name: null,
    type: null,
    categorie: null,
    min: null,
    max: null,
    nationality: null,
    sort: "nbTransactions",
    order: "ASC",
    nbSubscribers: null,
    nbViews: null,
    nbTransactions: null
  };

  constructor(private cardService: CardService, private typeService: TypeService) {
    this.getCards();

    this.subscribtions.add(this.typeService.getTypes().subscribe(res => {
      this.types = res;
    }));
  }

  ngOnInit() {

  }

  generateQueryParams() {
    var obj = {};
    for (var key in this.filters) {
      if (this.filters[key]) {
        obj[key] = this.filters[key];
      }
    }
    return obj;
  }

  getCards() {
    this.subscribtions.add(this.cardService.getCardsQuery(this.generateQueryParams()).subscribe(res => {
      this.cards = res.cards as Array<Card>;
      this.maxPages = res.pages;
      console.log('cards', res);

      for (var card of this.cards) {
        //TODO: request smartcontract
        // card.price = 0.001;
      }
    }));
  }

  selectType(type) {
    this.filters.type = type._id;
    this.getCards();
  }

  selectNationality(nationality) {
    this.filters.nationality = nationality;
    this.getCards();
  }

  prevPage() {
    if (this.filters.page > 1) {
      --this.filters.page;
      this.getCards();
    }
  }

  nextPage() {
    if (this.filters.page < this.maxPages) {
      ++this.filters.page;
      this.getCards();
    }
  }

  loadPage(idx) {
    this.filters.page = idx;
    this.getCards();
  }

  counter(max) {
    var counters = new Array(max);
    return counters;
  }

  onSearchChange(searchValue : string ) {
    this.filters.name = searchValue;
    this.getCards();
  }

  ngOnDestroy() {
    this.subscribtions.unsubscribe();
  }
}
