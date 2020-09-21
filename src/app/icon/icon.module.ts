import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconRoutingModule } from './icon-routing.module';
import { IconMenuComponent } from './component/icon-menu/icon-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [IconMenuComponent],
  imports: [
    CommonModule,
    IconRoutingModule
    FontAwesomeModule
  ]
})
export class IconModule { }
