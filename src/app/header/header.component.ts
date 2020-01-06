import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showGreeting: boolean = false;
  
  isMorning = false;

  customButtonClass = 'btn';
  customButtonMainClass = 'btn-primary';

  manualClass = 'btn btn-info';

  constructor() { }

  ngOnInit() {
  }

}
