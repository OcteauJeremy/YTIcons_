import { Component } from '@angular/core';
import { RealvalueService } from './services/realvalue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private realValueService: RealvalueService) {

  }
}
