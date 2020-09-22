import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui/ui.component';
import { IconModule } from '../icon/icon.module';


@NgModule({
  declarations: [UiComponent],
  imports: [
    CommonModule,
    UIRoutingModule,
    IconModule
  ],
  exports: [
    UiComponent
  ]
})
export class UIModule { }
