import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.scss']
})
export class ItemsViewComponent implements OnInit {

  constructor(
    private mediaObserver: MediaObserver,
  ) { }
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
  },
  {
    id: 11,
    name: 'Test 11',
    like: false,
    cart: false
  },
  {
    id: 12,
    name: 'Test 12',
    like: false,
    cart: false
  },
  {
    id: 13,
    name: 'Test 13',
    like: false,
    cart: false
  },
  {
    id: 14,
    name: 'Test 14',
    like: false,
    cart: false
  }
  ];
  viewItems = [];
  itemPage = 1;
  singlePageCount = 3;
  mediaSub: Subscription;
  deviceXs: boolean;
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      this.deviceXs = res.mqAlias === 'xs' ? true : false;
      if (this.deviceXs) {
        this.singlePageCount = 3;
      } else {
        this.singlePageCount = 6;
      }
      this.arrangeItems();
    });

  }

  arrangeItems(): void {
    this.viewItems = [];
    this.itemPage = 1;
    this.items.forEach((item, index) => {
      if (index < this.singlePageCount) {
        this.viewItems.push(item);
      }
    });
  }

  like(index, item): void {
    if (this.items[index].like) {
      this.items[index].like = false;
    } else {
      this.items[index].like = true;
    }
  }

  cart(index, item): void {
    if (this.items[index].cart) {
      this.items[index].cart = false;
    } else {
      this.items[index].cart = true;
    }
  }

  back(): void {
    if (this.itemPage > 1) {
      this.itemPage = this.itemPage - 1;
      const end = this.itemPage * this.singlePageCount;
      const start = end - this.singlePageCount;
      this.viewItems = [];
      for (let i = start; i < end; i++) {
        if (this.items[i] !== null) {
          const item = this.items[i];
          this.viewItems.push(item);
        }
      }
    }
  }

  frwd(): void {
    if ((this.itemPage * 3) < this.items.length) {
      this.itemPage = this.itemPage + 1;
      let end = this.itemPage * this.singlePageCount;
      const start = end - this.singlePageCount;
      if (end > this.items.length) {
        end = this.items.length;
      }
      this.viewItems = [];
      for (let i = start; i < end; i++) {
        if (this.items[i] !== null) {
          const item = this.items[i];
          this.viewItems.push(item);
        }
      }
    }
  }
}
