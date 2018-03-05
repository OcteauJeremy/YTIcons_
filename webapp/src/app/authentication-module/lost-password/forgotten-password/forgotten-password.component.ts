import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {

  constructor(private _router: Router, private toastr: ToastsManager) {
  }

  ngOnInit() {}

}
