import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingHomeComponent } from './screens/shopping/shopping-home/shopping-home.component';
import { LayoutComponent } from './screens/shopping/layout/layout.component';
import { ItemDetailsComponent } from './screens/shopping/item-details/item-details.component';
import { ShoppingCartComponent } from './screens/shopping/shopping-cart/shopping-cart.component';
import { ShoppingContactUsComponent } from './screens/shopping/shopping-contact-us/shopping-contact-us.component';

const routes: Routes = [
  {  path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '', component: LayoutComponent,
    children: [
      {path: 'home', component: ShoppingHomeComponent},
      {path: 'itemView/:id', component: ItemDetailsComponent},
      {path: 'cart', component: ShoppingCartComponent},
      {path: 'contactUs', component: ShoppingContactUsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
