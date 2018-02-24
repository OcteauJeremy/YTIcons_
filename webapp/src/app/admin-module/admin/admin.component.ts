import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { TypeService } from '../../services/type.service';
import { NationalityService } from '../../services/nationality.service';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public  urlChannel;
  public  types;
  public  nationalities;
  public  categories;
  public  responseYoutube = {};

  public  cardYoutuber = {
    name: "",
    image: "",
    nationality: {
      code: '',
      name: ''
    },
    nbSubscribers: 0,
    nbViews: 0,
    nbTransactions: 0,
    transactions: [],
    nbVideos: 0,
    category: {
      name: ''
    },
    url: "",
    description: "",
    citation: "",
    price: 0.001,
    owner: null,
    type: {
      name: "origin",
      css: "card-origin"
    }
  };

  public  cardOriginYoutuber = {
    name: "",
    image: "",
    nationality: null,
    nbSubscribers: 0,
    nbViews: 0,
    nbTransactions: 0,
    transactions: [],
    nbVideos: 0,
    category: null,
    url: "",
    description: "",
    citation: "",
    price: 0.001,
    owner: null,
    type: {
      name: "origin",
      css: "card-origin"
    }
  };

  constructor(private youtubeService: YoutubeService, private typeService: TypeService,
              private nationalityService: NationalityService, private http: HttpClient,
              private categoryService: CategoryService) {
    typeService.getTypes().subscribe(res => {
      this.types = res;
      this.attributeType();
    });

    nationalityService.getNationalities().subscribe(res => {
      this.nationalities = res;
    });

    this.categoryService.getCategories().subscribe( res => {
      this.categories = res;
    });

  }

  ngOnInit() {
  }

  attributeType() {
    for (let type of this.types) {
      if (type.minSubscribers && type.maxSubscribers && this.cardYoutuber.nbSubscribers != 0) {
        this.cardYoutuber.nbSubscribers = Number(this.cardYoutuber.nbSubscribers);

        if (this.cardYoutuber.nbSubscribers >= type.minSubscribers && this.cardYoutuber.nbSubscribers <= type.maxSubscribers) {
          this.cardYoutuber.type = type;
          return ;
        }
      }
    }
    this.cardYoutuber.type = this.types[0];
  }

  loadChannel() {
    console.log(this.urlChannel);
    this.youtubeService.getChannel({url: this.urlChannel}).subscribe(res => {
      console.log('res channel:', res);
      this.responseYoutube = res;
      this.cardYoutuber.name = res.snippet.title;
      this.cardYoutuber.image = res.snippet.thumbnails.medium.url;
      this.cardYoutuber.description = res.snippet.description;

      this.cardYoutuber.nbSubscribers = res.statistics.subscriberCount;
      this.cardYoutuber.nbVideos = res.statistics.videoCount;
      this.cardYoutuber.nbViews = res.statistics.viewCount;
      this.cardYoutuber.url = this.urlChannel;
      this.attributeType();

      this.linkNationality(res.snippet.country, function (self) {
        self.cardOriginYoutuber = JSON.parse(JSON.stringify(self.cardYoutuber));
        self.cardOriginYoutuber.type = self.getOriginType();
      });

    });
  }

  linkNationality(code, cb) {
    if (!code || typeof code == 'undefined') {
      cb(this);
      return ;
    }

    this.http.get<any>('https://restcountries.eu/rest/v2/alpha/' + code).subscribe(res => {
      var countryInfo = res;

      for (let nat of this.nationalities) {
        if (nat.code.toLowerCase() == countryInfo.alpha2Code.toLowerCase()) {
          this.cardYoutuber.nationality = nat;
          cb(this);
          return ;
        }
      }

      if (this.cardYoutuber.nationality == null) {
        this.nationalityService.createNationality({
          name: countryInfo.name.toLowerCase(),
          code: countryInfo.alpha2Code.toUpperCase()
        }).subscribe(res => {
          this.cardYoutuber.nationality = res;
          cb(this);
        });
      }

    })
  }

  selectCountry(value) {
    this.cardYoutuber.nationality = value;
  }

  priceChanged() {
    this.cardOriginYoutuber.price = this.cardYoutuber.price;
  }

  getOriginType() {
    for (let type of this.types) {
      if (type.name == "origin") {
        return type;
      }
    }
    return this.types[0];
  }
}
