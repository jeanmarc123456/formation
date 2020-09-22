import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  public title: string;
  public menuIsOpen: boolean;

  constructor() { }

  ngOnInit(): void {
    this.title ="Test d'un titre";
    this.menuIsOpen = false;
  }

// fonction ouvrir et fermer un menu
  public toggleMenu() {
  //   if (this.menuIsOpen === true) {
  //     this.menuIsOpen = false;
  //   } else {
  //     this.menuIsOpen = true;
  //   }
  this.menuIsOpen = !this.menuIsOpen;
  console.log(this.menuIsOpen);

  }
}
