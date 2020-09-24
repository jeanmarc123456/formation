import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-dark',
  templateUrl: './table-dark.component.html',
  styleUrls: ['./table-dark.component.scss']
})
export class TableDarkComponent implements OnInit {

  @Input() public headers: string[];

  constructor() { }

  ngOnInit(): void {
  }
}
