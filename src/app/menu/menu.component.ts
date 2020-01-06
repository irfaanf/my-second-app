import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    title = 'my-second-app';

    iType1 = 'text';
    iType2 = 'range';
    iType3 = 'date';

    stuff;
    fooThing;
    fooLastName = '';

    username = 'ahem';

    myClass = 'btn btn-danger btn-lg';
    myType = 'reset';
    myName = 'meh-button';

    onChangeStuff() {
        this.stuff = "Boo!";
    }

    onATFKeystroke($event) {
        console.log($event);
    }

    keyLastName(value: string) {
        this.fooLastName = value + ' | ';
    }

}