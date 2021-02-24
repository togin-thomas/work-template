import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.scss']
})
export class ItemsViewComponent implements OnInit {

  constructor() { }
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  ngOnInit(): void {
  }

}
