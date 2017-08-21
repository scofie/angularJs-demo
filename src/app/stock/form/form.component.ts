import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray , FormBuilder , FormControl , FormGroup , Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formModel:FormGroup;
  categories  = ['IT','P2P','电商','直播'];
  public stock:Stock = new Stock(0, "", 0, 0, "", []);
  private stockId:number;
  constructor(private routeInfo:ActivatedRoute ,private stockService:StockService,private router:Router) { }

  ngOnInit() {
    this.stockId = this.routeInfo.snapshot.params['id'];
    let fb  = new FormBuilder();
    this.formModel  = fb.group(
      {
          name: ['' , [ Validators.required, Validators.minLength(3)]],
          price: ['', [Validators.required]] ,
          desc: [''],
          rating: [''] ,
          categories:fb.array([
              new FormControl(false ),
              new FormControl(false ),
              new FormControl(false ),
              new FormControl(false ),
          ],this.categorieSelectValidator )
      }
    );
    
    this.stockService.getStock(this.stockId).subscribe(
        data => {
            this.stock  =   data ;
            this.formModel.reset({
                name:  data.name,
                price:  data.price,
                desc:   data.desc,
                rating: data.rating,
                categories: [
                    data.categories.indexOf(this.categories[0] ) != -1,
                    data.categories.indexOf(this.categories[1] ) != -1,
                    data.categories.indexOf(this.categories[2] ) != -1,
                    data.categories.indexOf(this.categories[3] ) != -1,
                ]
            });
            console.log(this.stock)
        }
    );
   
  }
   categorieSelectValidator(control:FormArray){
    var valid = false;
    control.controls.forEach(control =>{
      if( control.value) {
        valid = true;
      }
    })
    if( valid ) {
      return null ;
    } else {
      return {categoriesLength:true}
    }
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
    this.router.navigateByUrl('/stock')
  }
}
