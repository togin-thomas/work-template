import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingHomeComponent } from './screens/shopping/shopping-home/shopping-home.component';
import { MaterialModule } from './material-module';
import { SlideShowComponent } from './screens/shopping/slide-show/slide-show.component';
import { ItemsViewComponent } from './screens/shopping/items-view/items-view.component';
import { ContactComponent } from './screens/shopping/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingHomeComponent,
    SlideShowComponent,
    ContactComponent,
    ItemsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
