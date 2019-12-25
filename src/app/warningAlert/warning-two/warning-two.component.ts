import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-two',
  templateUrl: './warning-two.component.html',
  styleUrls: ['./warning-two.component.scss']
})
export class WarningTwoComponent implements OnInit {

  infoMessage:string = 'Twitter fail whale';

  constructor() { }

  ngOnInit() {
  }

  computeNumbers() {
    return 10 + 5;
  }

}
