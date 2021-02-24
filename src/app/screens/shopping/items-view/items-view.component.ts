import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.scss']
})
export class ItemsViewComponent implements OnInit {

  constructor() { }
  items = [{
    id: 1,
    name: 'Test 1',
    like: false,
    cart: false
  },
  {
    id: 2,
    name: 'Test ',
    like: false,
    cart: false
  },
  {
    id: 3,
    name: 'Test 3',
    like: false,
    cart: false
  },
  {
    id: 4,
    name: 'Test 4',
    like: false,
    cart: false
  },
  {
    id: 5,
    name: 'Test 5',
    like: false,
    cart: false
  },
  {
    id: 6,
    name: 'Test 6',
    like: false,
    cart: false
  },
  {
    id: 7,
    name: 'Test 7',
    like: false,
    cart: false
  },
  {
    id: 8,
    name: 'Test 8',
    like: false,
    cart: false
  },
  {
    id: 9,
    name: 'Test 9',
    like: false,
    cart: false
  },
  {
    id: 10,
    name: 'Test 10',
    like: false,
    cart: false
  }
  ];
  ngOnInit(): void {
  }

  like(index, item): void {
    if(this.items[index].like) {
      this.items[index].like = false;
    } else {
      this.items[index].like = true;
    }
  }

  cart(index, item): void {
    if(this.items[index].cart) {
      this.items[index].cart = false;
    } else {
      this.items[index].cart = true;
    }
  }
}
