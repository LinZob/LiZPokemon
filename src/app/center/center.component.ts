import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

  @Input() impImg : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
