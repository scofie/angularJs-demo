import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
    private stocks: Array<Stock>;

    constructor() {
    }

    ngOnInit() {
        this.stocks = [
            new Stock(1, '第一支股票', 1.99, 1.5, 'First Stock ', ['IT', 'P2P']),
            new Stock(2, '第二支股票', 2.99, 2.5, 'Second Stock ', [ 'P2P']),
            new Stock(3, '第三支股票', 3.99, 3.5, 'Third Stock ', ['IT']),
            new Stock(4, '第四支股票', 4.99, 4.5, 'Forth Stock ', ['IT', '电商']),
            new Stock(5, '第五支股票', 5.99, 3.1, 'Fifth Stock ', ['电商', 'P2P']),
            new Stock(6, '第六支股票', 6.99, 2.6, 'SixTh Stock ', ['IT', '直播']),
            new Stock(7, '第七支股票', 7.99, 5.0, 'Seven Stock ', ['电商', 'P2P']),
        ];
    }

}

export class Stock {

    constructor(public id: number,
                public name: string,
                public price: number,
                public rating: number,
                public desc: string,
                public categories: Array<string>) {

    }

}