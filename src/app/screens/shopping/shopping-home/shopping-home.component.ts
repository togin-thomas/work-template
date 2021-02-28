import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-home',
  templateUrl: './shopping-home.component.html',
  styleUrls: ['./shopping-home.component.scss']
})
export class ShoppingHomeComponent implements OnInit {

  constructor() { }

  img1 = 'https://images.unsplash.com/photo-1610375472893-33dc4f6a6805?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
  img2 = 'https://images.unsplash.com/photo-1551375560-bd4589346ac9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
  img3 = 'https://images.unsplash.com/photo-1590227521023-e362889a3adb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';

  ngOnInit(): void {
  }

}
