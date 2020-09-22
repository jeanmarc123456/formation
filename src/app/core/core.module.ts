import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports : [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  declarations: [HeaderComponent, NavComponent, FooterComponent],
})
export class CoreModule { }
