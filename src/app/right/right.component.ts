import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  @Input() impMoves : string[] = ['hallo','du','tach','auch'];

  constructor() { }

  ngOnInit(): void {
  }

}
