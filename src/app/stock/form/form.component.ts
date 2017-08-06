import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public stock:Stock;
  constructor(private routeInfo:ActivatedRoute ,private stockService:StockService,private router:Router) { }

  ngOnInit() {
    let stockId = this.routeInfo.snapshot.params['id'];
    this.stock  = this.stockService.getStock(stockId);
  }

  cancel() {
    this.router.navigateByUrl('/stock')
  }
  save(){
    this.router.navigateByUrl('/stock')
  }
}
