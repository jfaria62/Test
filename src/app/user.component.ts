import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <!--<input type="text" [(ngModel)]="name">-->
  <input type="text" (input)="onUserInput($event)" [value]="name">
  <p>Hello {{ name }}</p>
  <p> I'm the User component</p>
  <app-detail></app-detail>
 `
})

export class UserComponent {
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  onUserInput(event) {
// tslint:disable-next-line: deprecation
// this.name = HTMLInputElement event.target.value;
       this.nameChange.emit((event.target as HTMLInputElement).value); //
      }
}
