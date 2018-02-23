import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../models/Card';
import { CardService } from '../../services/card.service';
import { Subscription } from 'rxjs/Subscription';
import { TypeService } from '../../services/type.service';
import {NationalityService} from "../../services/nationality.service";
import {CategoryService} from "../../services/category.service";


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit, OnDestroy {

  public  cards = [];
  public  types = [];
  public  nationalities = [];
  public  categories = [];

  private subscribtions: Subscription = new Subscription();
  private maxPages = 0;

  private filters = {
    page: 1,
    name: null,
    type: null, //ID
    category: null, //ID
    minPrice: null,
    maxPrice: null,
    minSubscribers: null,
    maxSubscribers: null,
    minViews: null,
    maxViews: null,
    minVideos: null,
    maxVideos: null,
    minTransactions: null,
    maxTransactions: null,
    nationality: null, //ID
    sort: "price",
    order: "DESC",
    nbViews: null,
    nbTransactions: null
  };

  constructor(private cardService: CardService, private typeService: TypeService,private nationalityService: NationalityService,private categoryService: CategoryService) {
    this.getCards();

    this.subscribtions.add(this.typeService.getTypes().subscribe(res => {
      this.types = res;
    }));

    this.subscribtions.add(this.nationalityService.getNationalities().subscribe(res => {
      this.nationalities = res;
    }));

    this.subscribtions.add(this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
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
    this.filters.nationality = nationality._id;
    this.getCards();
  }

  selectCategory(category) {
    this.filters.category = category._id;
    this.getCards();
  }

  selectFollower(min:number, max:number) {
    this.filters.maxSubscribers = max;
    this.filters.minSubscribers = min;
    this.getCards();
  }

  selectVideo(min:number, max:number) {
    this.filters.maxVideos = max;
    this.filters.minVideos = min;
    this.getCards();
  }

  selectSort(sort: string) {
    let sort_array =  sort.split("_");

    this.filters.sort = sort_array[0];
    this.filters.order = sort_array[1];
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
