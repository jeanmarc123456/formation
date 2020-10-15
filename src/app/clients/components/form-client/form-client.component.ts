import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  public form: FormGroup;
  @Input() public client= new Client()
  @Output() public submitted: EventEmitter<any> = new EventEmitter();
  public states = Object.values(StateOrder);


  constructor(private formB: FormBuilder) { }


  ngOnInit(): void {
    this.form = this.formB.group({
      id: [this.client.id],
      name: [this.client.name],
      ca: [this.client.ca],
      comment: [this.client.comment],
      state: [this.client.state],
      tva: [this.client.tva],
  });

}

public onSubmit() {
  this.submitted.emit(this.form.value);

}}
