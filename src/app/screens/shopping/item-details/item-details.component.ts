import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  selectImgInd = 0;
  imgName = '../../../../assets/img4.jpg';

  ngOnInit(): void {
  }

  openImage(index): void {
    this.selectImgInd = index;
    if (index === 0 || index === 2) {
      this.imgName = '../../../../assets/img4.jpg';
    } else {
      this.imgName = '../../../../assets/img5.jpg';
    }
  }

  goBackItems(): void {
    this.router.navigate(['home']);
  }
}
