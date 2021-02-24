import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingHomeComponent } from './screens/shopping/shopping-home/shopping-home.component';
import { MaterialModule } from './material-module';
import { SlideShowComponent } from './screens/shopping/slide-show/slide-show.component';
import { ItemsViewComponent } from './screens/shopping/items-view/items-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingHomeComponent,
    SlideShowComponent,
    ItemsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
