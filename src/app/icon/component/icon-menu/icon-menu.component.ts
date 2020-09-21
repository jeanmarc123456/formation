import { Component, OnInit } from '@angular/core';
import { faBarcode, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.scss']
})
export class IconMenuComponent implements OnInit {

  public myIcon = faBars;
  constructor() { }

  ngOnInit(): void {
  }

}
