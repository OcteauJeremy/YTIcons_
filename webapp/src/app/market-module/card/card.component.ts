import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../models/Card';
import {CardService} from "../../services/card.service";
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {Observable} from '../../../../node_modules/rxjs';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input("card") card: Card;
  @Input("modal") modal: Boolean = true;
  public currentUser = {
    _id: ""
  };

  private subscriptions: Subscription = new Subscription();

  public obj: any;
  public currentWallet: string;

  constructor(private authenticationService: AuthenticationService, public cs: CardService,
              private router: Router) {
    this.subscriptions.add(this.authenticationService.currentUserChange.subscribe((user) => {
      this.currentUser = user;
    }));

    this.currentUser = this.authenticationService.getLocalUser();
  }


  hoverEffect(x, y){

    let eWidth = this.obj.clientWidth;
    let eHeight = this.obj.clientHeight;

    let xPos = (x - (eWidth / 2)) / 30;
    let yPos = (y - (eHeight / 2)) / 30;

    var rotateX = Math.round(+ (yPos * 0.6));
    var rotateY = Math.round(- (xPos * 1));

    this.obj.style.transition = 'all 0s linear';
    this.obj.style.transform = 'scale(1.0) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    this.obj.style.zIndex = '99';
  }


  ngOnInit() {
    Observable.interval(2000).subscribe(x => {
      this.currentWallet = this.cs._account;
    });

  }

  ngAfterViewInit(){
    let _self = this;

    this.obj = document.getElementById(this.card._id);

    this.obj.onmousemove = function(event){

      var viewportOffset = _self.obj.getBoundingClientRect();

      let relX = event.pageX - viewportOffset.left;
      let relY = event.pageY - viewportOffset.top - window.scrollY;


      _self.hoverEffect(relX, relY);
    };


    this.obj.onmouseleave = function(){

      _self.obj.style.transition = 'all 0.8s ease-in-out';
      _self.obj.style.transform = 'rotate(0deg)';
      _self.obj.style.zIndex = '0';
    };
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
