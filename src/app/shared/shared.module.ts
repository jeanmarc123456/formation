import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [TableLightComponent, TotalPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    TableLightComponent,
    TotalPipe,
  ]
})
export class SharedModule { }
