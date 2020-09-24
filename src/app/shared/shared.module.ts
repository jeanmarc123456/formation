import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, StateDirective, BtnComponent, TableDarkComponent],
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
  ]
})
export class SharedModule { }
