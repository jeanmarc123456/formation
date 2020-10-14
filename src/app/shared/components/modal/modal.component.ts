import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string = "title Modal";
  @Output() dismissed: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }



  public dismissModal() {
    this.dismissed.emit();
  }
}
