import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../icon/icon.module';
import { SharedModule } from '../shared/shared.module';
import { TemplateModule } from '../template/template.module';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PagesordersComponent } from './pages/pagesorders/pagesorders.component';
import { PageRecapOrderComponent } from './pages/page-recap-order/page-recap-order.component';



@NgModule({
  declarations: [PagesordersComponent, PageAddOrderComponent, PageEditOrderComponent, FormOrderComponent, PageRecapOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    TemplateModule,
    ReactiveFormsModule,
    IconModule,
  ]
})
export class OrdersModule { }
