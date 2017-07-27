import { Component, OnInit } from '@angular/core';
import {Stock} from "../manager/manager.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public stock:Stock;
  constructor() { }

  ngOnInit() {
    this.stock  = new Stock(1, '第一支股票', 1.99, 1.5, 'First Stock ', ['IT', 'P2P']);
  }

}
