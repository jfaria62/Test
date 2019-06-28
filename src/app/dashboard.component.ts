import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <h1>Your Dashboard </h1>
  <h2> {{ loadState }}</h2>
  <h2 [textContent]="loadState"> </h2>
  <p> I'm the User dashboard</p>
  <button (click)="onUserClick()"> Click Here</button>
  <div>
    <!--<input type="text" (input)="loadState = $event.target.value">--->
    <input type="text" [(ngModel)]="loadState">

  </div>
 `
})

export class DashboardComponent {
  loadState = 'loading...';

  onUserClick() {
    this.loadState = 'finished!';
  }
}
