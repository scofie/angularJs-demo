import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  private stocks: Array<Stock>;
  private keyWordFilter:FormControl  = new FormControl();
  public keyWord:string;
  constructor(public router:Router,private stockService:StockService) {
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.keyWordFilter.valueChanges.debounceTime(500).subscribe(
      value => this.keyWord = value
      );
  }
  create(){
    this.router.navigateByUrl('/stock/0');
  }
  update(stock:Stock) {
    this.router.navigateByUrl ('/stock/' + stock.id)
  }

}

