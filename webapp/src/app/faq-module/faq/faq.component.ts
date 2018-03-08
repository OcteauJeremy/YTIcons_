import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      $('#collapse' + params['collapse']).collapse('show');
    });
  }

}
