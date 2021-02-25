import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingContactUsComponent } from './shopping-contact-us.component';

describe('ShoppingContactUsComponent', () => {
  let component: ShoppingContactUsComponent;
  let fixture: ComponentFixture<ShoppingContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
