import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-second-app';

  iType1 = 'text';
  iType2 = 'range';
  iType3 = 'date';
}
