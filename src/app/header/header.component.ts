import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showGreeting: boolean = false;

  isMorning = false;

  customButtonClass = 'btn btn-sm btn-warning';
  customButtonMainClass = 'btn';
  customButtonSecondaryClass = 'btn-success';

  manualClass = 'btn btn-info';

  specialObject = {
    'btn': true,
    'btn-info': true
  }

  constructor() { }

  ngOnInit() {
  }

  calculateClasses() {
    return {
      'btn': true,
      'btn-secondary': true
    }
  }

  returnString() {
    return 'btn btn-danger';
  }

  returnArray() {
    return ['btn', 'btn-success'];
  }

  returnObject() {
    return { 'btn': true, 'btn-info': true };
  }
}
