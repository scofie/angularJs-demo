import { Component, OnInit } from '@angular/core';
import {SocketService} from "app/header/socket.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public messageCount: number= 0 ;
  constructor( public socketService: SocketService) { }

  ngOnInit() {
    this.socketService.createObservableSocket("ws://localhost:8085")
        .map( event => JSON.parse(event))
        .subscribe(
            event =>  this.messageCount = event.messageCount
        )
  }

}
