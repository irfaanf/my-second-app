import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-one',
  templateUrl: './warning-one.component.html',
  styleUrls: ['./warning-one.component.scss']
})
export class WarningOneComponent implements OnInit {

  allowSomething: boolean;

  constructor() {
    // console.log(this.allowSomething);
    setTimeout(() => {
      this.allowSomething = true;
    }, 1500)
  }

  ngOnInit() {
  }

}
