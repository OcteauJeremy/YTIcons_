import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../models/Card';
import { CardService } from '../../services/card.service';
import { TypeService } from '../../services/type.service';
import { NationalityService } from '../../services/nationality.service';
import { CategoryService } from '../../services/category.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit, OnDestroy {

  public cards = [];
  public types = [];
  public nationalities = [];
  public categories = [];
  public isLoading = false;

  private subscribtions: Subscription = new Subscription();
  public maxPages = 0;

  public names = {
    type: null,
    nationality: null,
    category: null,
    subscribers: null,
    videos: null
  };

  public filters = {
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
              private nationalityService: NationalityService, private categoryService: CategoryService) {
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

  generateQueryParams() {
    var obj = {};
    for (var key in this.filters) {
      if (this.filters[key]) {
        obj[key] = this.filters[key];
      }
    }
    return obj;
  }

  ngOnInit(): void {

  }

  getCards() {
    this.isLoading = true;
    this.cards = [];
    this.subscribtions.add(this.cardService.getCardsQueryAdmin(this.generateQueryParams()).subscribe(res => {
      this.isLoading = false;
      this.cards = res.cards as Array<Card>;
      this.maxPages = res.pages;
      console.log('cards', res);

      for (var card of this.cards) {
        card.copy = JSON.parse(JSON.stringify(card));
        card.modifed = false;
        card.isSaving = false;
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

  selectFollower(min, max, s: string) {
    this.filters.maxSubscribers = max;
    this.filters.minSubscribers = min;
    this.names.subscribers = s;
    this.getCards();
  }

  selectVideo(min, max, s: string) {
    this.filters.maxVideos = max;
    this.filters.minVideos = min;
    this.names.videos = s;
    this.getCards();
  }

  selectSort(sort: string) {
    let sort_array = sort.split("_");

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

  timeout = null;
  onSearchChange(searchValue : string ) {
    if (this.timeout !== null) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(function (self) {
      self.filters.name = searchValue;
      self.getCards();
    }, 1000, this);
  }

  /*** Market component change ***/
  saveCard(card) {

    card.isSaving = true;
    var modifyCard = (card) => {
      this.subscribtions.add(this.cardService.modifyCard(card).subscribe( res => {
        card.modified = false;
        card.copy = res;
        card.isSaving = false;
        //toaster
      }));
    };

    if (card.isLocked != card.copy.isLocked) {
      if (card.isLocked) {
        this.cardService.lockCard(card.id).then((resultat) => {
          card.tx = resultat;
          modifyCard(card)
        });
      } else {
        this.cardService.unlockCard(card.id).then((resultat) => {
          card.tx = resultat;
          modifyCard(card)
        });
      }
    } else {
      modifyCard(card);
    }
  }

  triggerSave(card) {
    if (card.isHidden != card.copy.isHidden || card.isLocked != card.copy.isLocked ||
      card.type._id != card.copy.type._id) {
      card.modified = true;
    }

    if (card.isHidden == card.copy.isHidden && card.isLocked == card.copy.isLocked &&
      card.type._id == card.copy.type._id) {
      card.modified = false;
    }
  }


  ngOnDestroy() {
    this.subscribtions.unsubscribe();
  }
}
