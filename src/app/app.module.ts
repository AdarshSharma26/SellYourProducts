import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipes' ;
import { StarComponent } from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component' ;
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,  
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component : ProductDetailComponent },
      { path: 'welcome' ,component: WelcomeComponent },
      { path: '',redirectTo: 'welcome',pathMatch: 'full'},
      { path: '*',redirectTo: 'welcome',pathMatch: 'full'}
    ], {useHash : true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }