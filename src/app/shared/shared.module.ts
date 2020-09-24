import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, StateDirective, BtnComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ],
  exports: [
    TableLightComponent,
    TotalPipe,
    StateDirective,
    BtnComponent
  ]
})
export class SharedModule { }
