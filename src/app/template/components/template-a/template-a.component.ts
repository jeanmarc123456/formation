import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.scss']
})
export class TemplateAComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
