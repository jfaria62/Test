import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  = 'Angular Practice';
  rootName = 'Jonny';

  rootItems = ['Apples', 'Bananas', 'Cherries'];
  ItemAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

  onNameChange(newName: string) {
      this.rootName = newName;
  }
}
