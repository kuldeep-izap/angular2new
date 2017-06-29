import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import  { StocksComponent } from './stocks.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import {HighlightDirective} from  './highlight.directive';
import {StockService} from './stock.service';

@NgModule({
  declarations: [
    AppComponent, StocksComponent,
    MutualfundsComponent,
    StockDirectiveDirective, HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
