import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BusinessDataComponent } from './business-data/business-data.component';
import { ProductsComponent } from './products/products.component';
import { BottomCtaComponent } from './bottom-cta/bottom-cta.component';
import { CardItemComponent } from './business-data/card-item/card-item.component';
import { ProductItemComponent } from './products/product-item/product-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusinessDataComponent,
    ProductsComponent,
    BottomCtaComponent,
    CardItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
