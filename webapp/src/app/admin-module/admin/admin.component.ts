import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public  urlChannel;
  public  types;
  public  responseYoutube = {};
  public  cardYoutuber = {
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
    type: null
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
    type: null
  };

  constructor(private youtubeService: YoutubeService, private typeService: TypeService) {
    typeService.getTypes().subscribe(res => {
      this.types = res;
      this.attributeType();
    })
  }

  ngOnInit() {
  }

  attributeType() {
    for (let type of this.types) {
      if (type.minSubscribers && type.maxSubscribers && this.cardYoutuber.nbSubscribers != 0) {
        this.cardYoutuber.nbSubscribers = Number(this.cardYoutuber.nbSubscribers);


        if (this.cardYoutuber.nbSubscribers >= type.minSubscribers && this.cardYoutuber.nbSubscribers <= type.maxSubscribers) {
          this.cardYoutuber.type = type;
        }
      }
    }
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

      this.cardOriginYoutuber = JSON.parse(JSON.stringify(this.cardYoutuber));
      this.cardOriginYoutuber.type = this.getOriginType();
    });
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
