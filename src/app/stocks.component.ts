import {Component} from '@angular/core';
import {StockService} from './stock.service';

@Component({
    selector: 'stocks',
    template: `<h2>Stocks</h2>
    {{title}}

    <ul>
        <li *ngFor="let stock of stocks">
          {{stock}}
        </li>
    </ul>
    `
})

export class StocksComponent{
    
    title = 'List of stocks: ';
    //stocks=['APPL', 'IBM', 'GOOG'];
        stocks;
    constructor(stockservice : StockService){
         this.stocks = stockservice.getStocks();
    }
}