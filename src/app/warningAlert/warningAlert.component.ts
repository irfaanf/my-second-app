import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `<h4>Warning!</h4>
    <app-warning-one></app-warning-one>
    <app-warning-two></app-warning-two>
    `,
    styles: ['h4 { color: orange; }']
})
export class WarningAlertComponent {

}