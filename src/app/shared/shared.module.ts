import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { SharedRoutingModule } from './shared-routing.module';
import { InvalidTypeDirective } from './directives/invalid-type.directive';
import { InvalidMessageDirective } from './directives/invalid-message.directive';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, StateDirective, BtnComponent, TableDarkComponent, InvalidTypeDirective, InvalidMessageDirective, ModalComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ],
  exports: [
    TableLightComponent,
    TotalPipe,
    StateDirective,
    BtnComponent,
    TableDarkComponent,
    InvalidMessageDirective,
    InvalidTypeDirective,
    ModalComponent
  ]
})
export class SharedModule { }
