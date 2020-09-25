import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDeleteComponent } from './component/icon-delete/icon-delete.component';
import { IconMenuComponent } from './component/icon-menu/icon-menu.component';
import { IconUpdateComponent } from './component/icon-update/icon-update.component';
import { IconRoutingModule } from './icon-routing.module';



@NgModule({
  declarations: [IconMenuComponent, IconDeleteComponent, IconUpdateComponent],
  imports: [
    CommonModule,
    IconRoutingModule,
    FontAwesomeModule,
  ],
  exports: [
    IconMenuComponent,
    IconUpdateComponent,
    IconDeleteComponent
  ]
})
export class IconModule { }
