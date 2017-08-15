import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder , FormControl , FormGroup , Validators} from "@angular/forms";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formModel:FormGroup;
  categories  = ['IT','P2P','电商','直播'];
  public stock:Stock;
  private stockId:number;
  constructor(private routeInfo:ActivatedRoute ,private stockService:StockService,private router:Router) { }

  ngOnInit() {
    this.stockId = this.routeInfo.snapshot.params['id'];
    this.stock  = this.stockService.getStock(this.stockId);
    let fb  = new FormBuilder();
    this.formModel  = fb.group(
      {
        name: [this.stock.name ,[Validators.required,Validators.minLength(3)]],
        price:[this.stock.price,[Validators.required]] ,
        desc:[this.stock.desc],
        categories:fb.array([
          new FormControl(this.stock.categories.indexOf(this.categories[0]) != -1 ),
          new FormControl(this.stock.categories.indexOf(this.categories[1]) != -1 ),
          new FormControl(this.stock.categories.indexOf(this.categories[2]) != -1 ),
          new FormControl(this.stock.categories.indexOf(this.categories[3]) != -1 )
        ])
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/stock')
  }
  save(){
    var chineseCategories = [];
    var index   = 0;
    for( var i=0 ;i<3;i++){
      if(this.formModel.value.categories[i] ) {
        chineseCategories[index ++ ]  = this.categories[i];
      }
    }
    this.formModel.value.categories = chineseCategories ;
    this.formModel.value.rating = this.stock.rating;
    console.log(this.formModel.value);
    //this.router.navigateByUrl('/stock')
  }
}
