import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { TypeService } from '../../services/type.service';
import { NationalityService } from '../../services/nationality.service';
import { HttpClient } from '@angular/common/http';
import {CardService} from "../../services/card.service";
import { CategoryService } from '../../services/category.service';
import { UserService } from '../../services/user.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public  urlChannel;
  public  rootUser;
  public  types = [];
  public  nationalities = [];
  public  categories = [];
  public  fileYoutuber= null;
  public  createOrigin = true;
  public  loadingChannel = false;
  public  createLoading = false;
  public  formData = new FormData();
  public  responseYoutube = {};
  public  selectInputs = {
    codeCountry: "",
    nameCountry: "",
    nameCategory: ""
  };

  public  cardYoutuber = {
    name: "",
    image: "assets/images/cvrplc.jpg",
    nationality: {
      code: '',
      name: ''
    },
    nbSubscribers: 0,
    nbViews: 0,
    nbTransactions: 0,
    transactions: [],
    nbVideos: 0,
    isHidden: false,
    isLocked: false,
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
    image: "assets/images/cvrplc.jpg",
    nationality: null,
    nbSubscribers: 0,
    nbViews: 0,
    nbTransactions: 0,
    transactions: [],
    nbVideos: 0,
    isHidden: false,
    isLocked: false,
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

  private _self;

  constructor(private youtubeService: YoutubeService, private typeService: TypeService,
              private nationalityService: NationalityService, private http: HttpClient,
              private categoryService: CategoryService,private cs: CardService,
              private userService: UserService) {
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

    userService.getRoot().subscribe(res => {
      this.rootUser = res;
      this.cardYoutuber.owner = this.rootUser;
      this.cardOriginYoutuber.owner = this.rootUser;
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
    this.loadingChannel = true;
    this.youtubeService.getChannel({url: this.urlChannel}).subscribe(res => {
      this.responseYoutube = res;
      this.cardYoutuber.name = res.snippet.title;
      this.cardYoutuber.image = res.snippet.thumbnails.medium.url;
      this.cardYoutuber.description = res.snippet.description;

      this.cardYoutuber.nbSubscribers = parseInt(res.statistics.subscriberCount);
      this.cardYoutuber.nbVideos = parseInt(res.statistics.videoCount);
      this.cardYoutuber.nbViews = parseInt(res.statistics.viewCount);
      this.cardYoutuber.url = this.urlChannel;
      this.attributeType();

      this.linkNationality(res.snippet.country, function (self) {
        var isHidden = self.cardOriginYoutuber.isHidden;
        var isLocked = self.cardOriginYoutuber.isLocked;

        self.cardOriginYoutuber = JSON.parse(JSON.stringify(self.cardYoutuber));
        self.cardOriginYoutuber.type = self.getOriginType();
        self.cardOriginYoutuber.isLocked = isLocked;
        self.cardOriginYoutuber.isHidden = isHidden;
      });
      this.loadingChannel = false;
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
          this.selectInputs.codeCountry = this.cardYoutuber.nationality.code;
          this.selectInputs.nameCountry = this.cardYoutuber.nationality.name;
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
          this.selectInputs.codeCountry = this.cardYoutuber.nationality.code;
          this.selectInputs.nameCountry = this.cardYoutuber.nationality.name;
          cb(this);
          return ;
        });
      } else {
        cb(this);
      }
    })
  }

  checkForm() {
    this.resetInpputs();

    if (this.selectInputs.nameCountry == '' || this.selectInputs.codeCountry == '' || this.selectInputs.nameCategory == '') {
      let inputsCategory = [$('#wrapCategory'), $('#categoryName')];
      let inputsNationality = [$('#wrapCountry'), $('#codeCountry'), $('#nameCountry')];

      let collapseHead = $('#informations-card');
      let collapseBody = $('#collapseInformations');

      if (!collapseBody.hasClass('in')) {
        collapseHead.click();
      }

      let offset;
      if (this.selectInputs.nameCountry == '' || this.selectInputs.codeCountry == '') {
        offset = $("#country").offset().top - 100;
        inputsNationality[0].addClass('error');
        inputsNationality[1].addClass('error');
        inputsNationality[2].addClass('error');
      } else if (this.selectInputs.nameCategory == '') {
        offset = $("#category").offset().top - 100;
        inputsCategory[0].addClass('error');
        inputsCategory[1].addClass('error');
      }

      $('html, body').animate({
        scrollTop: offset
      }, 1000);

      return false;
    }
    return true;
  }

  createCard() {
    if (!this.checkForm()) {
      return ;
    }

    if (this.fileYoutuber) {
      this.formData.append('image', this.fileYoutuber, this.fileYoutuber.name);
      this.cardOriginYoutuber.image = "";
      this.cardYoutuber.image = "";
    }

    var self = this;
    var category = this.categories.find(function (obj) {
      return obj.name == self.selectInputs.nameCategory;
    });

    var country = this.nationalities.find(function (obj) {
      return obj.code == self.selectInputs.codeCountry;
    });

    this.createLoading = true;
    var createCardSC = function (self) {
      self.cs.createCardSC(self.cardYoutuber).then(function(cardYT) {
        if (self.fileYoutuber) {
          self.cs.setImageCard(cardYT, self.formData).subscribe(function () {});
        }

        if (self.createOrigin) {
          var isHidden = self.cardOriginYoutuber.isHidden;
          var isLocked = self.cardOriginYoutuber.isLocked;

          self.cardOriginYoutuber = JSON.parse(JSON.stringify(self.cardYoutuber));
          self.cardOriginYoutuber.type = self.getOriginType();
          self.cardOriginYoutuber.isHidden = isHidden;
          self.cardOriginYoutuber.isLocked = isLocked;
          self.cs.createCardSC(self.cardOriginYoutuber).then(function(cardOrigin) {
            self.createLoading = false;
            if (self.fileYoutuber) {
              self.cs.setImageCard(cardOrigin, self.formData).subscribe(function () {
              });
            }
          });
        } else {
          self.formData = new FormData();
          self.createLoading = false;
        }
      });
    };

    this.cardYoutuber.owner = this.rootUser;

    if (!country) {
      country = {
        code: this.selectInputs.codeCountry,
        name: this.selectInputs.nameCountry
      };
      this.nationalityService.createNationality(country).subscribe(res => {
        this.cardYoutuber.nationality = res;
        if (!category) {
          category = {
            name: this.selectInputs.nameCategory
          };
          this.categoryService.create(category).subscribe(res => {
            this.cardYoutuber.category = res;
            createCardSC(this);
          });
        }
      });

    } else if (!category) {
      category = {
        name: this.selectInputs.nameCategory
      };
      this.categoryService.create(category).subscribe(res => {
        this.cardYoutuber.category = res;
        createCardSC(this);
      });
    } else {
      createCardSC(this);
    }
  }

  changeInputCategory() {
    this.selectInputs.nameCategory = this.cardYoutuber.category.name;
  }

  changeInputCountry() {
    this.selectInputs.nameCountry = this.cardYoutuber.nationality.name;
    this.selectInputs.codeCountry = this.cardYoutuber.nationality.code;
  }

  createCardFromName(name: string) {
    this.cs.createCardFromName(name).then(function(res) {
      //console.log(res);
    });
  }

  resetInpputs() {
    $('#wrapCategory').removeClass('error');
    $('#categoryName').removeClass('error');

    $('#wrapCountry').removeClass('error');
    $('#codeCountry').removeClass('error');
    $('#nameCountry').removeClass('error');
  }

  priceChanged() {
    this.cardOriginYoutuber.price = this.cardYoutuber.price;
  }

  refreshImage(event: any) {
    let fileList = event.target.files;

    if (fileList && fileList.length > 0) {
      this.fileYoutuber = fileList[0];
      var reader = new FileReader();

      reader.onload = (ev:any) => {
        this.cardYoutuber.image = ev.target.result;
        this.cardOriginYoutuber.image = ev.target.result;
      };

      reader.readAsDataURL(this.fileYoutuber);
    }
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
