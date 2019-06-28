import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  @Input() items: string[];

  newItem = '';

  @Output() itemList = new EventEmitter<string>();

  addItem(event) {
    this.itemList.emit(this.newItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
