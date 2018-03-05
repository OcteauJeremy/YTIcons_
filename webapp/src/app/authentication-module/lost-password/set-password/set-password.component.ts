import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  constructor(private _router: Router, private toastr: ToastsManager) {
  }

  ngOnInit() {}

}
