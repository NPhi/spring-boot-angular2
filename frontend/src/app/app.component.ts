import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'spring-boot-angular2',
    template: '<home></home>',
    styleUrls: ['app.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    name = 'spring-boot-angular2';
}
