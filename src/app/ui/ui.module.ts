import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui/ui.component';


@NgModule({
  declarations: [UiComponent],
  imports: [
    CommonModule,
    UIRoutingModule
  ],
  exports: [
    UiComponent
  ]
})
export class UIModule { }
