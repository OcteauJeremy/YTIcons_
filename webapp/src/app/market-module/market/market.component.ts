import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../models/Card';
import { CardService } from '../../services/card.service';
import { Subscription } from 'rxjs/Subscription';
import { TypeService } from '../../services/type.service';
import { NationalityService } from "../../services/nationality.service";
import { CategoryService } from "../../services/category.service";
import { Socket } from 'ng-socket-io';

declare var jquery: any;
declare var $: any;

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

  private names = {
    type: null,
    nationality: null,
    category: null,
    subscribers: null,
    videos: null
  };

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
    sort: "createdAt",
    order: "DESC",
    nbViews: null,
    nbTransactions: null
  };

  constructor(private cardService: CardService, private typeService: TypeService,
              private nationalityService: NationalityService,private categoryService: CategoryService,
              private socket: Socket) {
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

    this.socket.on('tx-card', cardId => {
      this.cardService.getCard(cardId).subscribe(newCard => {
        let idx = 0;
        for (let card of this.cards) {
          if (card._id == cardId) {
            this.cards[idx] = newCard;
            break ;
          }
          ++idx;
        }
      });
    });
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
    this.names.type = type.name;
    this.getCards();
  }

  selectNationality(nationality) {
    this.filters.nationality = nationality._id;
    this.names.nationality = nationality.name;
    this.getCards();
  }

  selectCategory(category) {
    this.filters.category = category._id;
    this.names.category = category.name;
    this.getCards();
  }

  selectFollower(min:number, max:number, s: string) {
    this.filters.maxSubscribers = max;
    this.filters.minSubscribers = min;
    this.names.subscribers = s;
    this.getCards();
  }

  selectVideo(min:number, max:number, s: string) {
    this.filters.maxVideos = max;
    this.filters.minVideos = min;
    this.names.videos = s;
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
    this.socket.disconnect();
  }
}
