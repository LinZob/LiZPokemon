import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  varID : number = 0;
  varName : string ='';
  
  @Output() readonly evName = new EventEmitter();
  @Output() readonly evID = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickButton():void{
    this.evName.emit(this.varName);
    this.evID.emit(this.varID);

    this.varID = 0;
    this.varName = '';
    
  }



}
