import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'
// keyframes - for multi-step animation

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger('myAnimation', [
          state('small', style({ transform: 'scale(1)' })),
          state('bigger', style({ transform: 'scale(1.2)' })),

          transition('small <=> bigger',
              animate('300ms ease-in', keyframes([
                  style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                  style({ opacity: 0.5, transform: 'translateY(20px)', offset: 0.5 }),
                  style({ opacity: 1, transform: 'translateY(-75%)', offset: 1 })
                ])
              ))
      ])
  ]
})

export class AppComponent {

    constructor(private dataSvc: DataService) {
    }

    ngOnInit() {
        console.log(this.dataSvc.cars);
        this.someProperty = this.dataSvc.myData();
    }

    currentState: string = 'small';

    animateMe() {
        return this.currentState === 'small' ? 'bigger' : 'small';
    }

    someProperty: string = '';

    title = 'app';
    heyVar = 'hey you!';

    angularLogo = "./favicon.ico";

    myEvent(event) {
        console.log(event);
    }
}
