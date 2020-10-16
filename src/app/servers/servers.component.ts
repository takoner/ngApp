import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created !';
  serverCreated=false;

  constructor() {setTimeout(()=>{this.allowNewServer=true}, 2000) }

  ngOnInit(): void {
  }


  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus='Server Created';
  }

  

}
