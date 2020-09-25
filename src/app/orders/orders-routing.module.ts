import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PagesordersComponent } from './pages/pagesorders/pagesorders.component';

const routes: Routes = [
  { path: "", component: PagesordersComponent},
  { path:"add", component: PageAddOrderComponent},
  { path:"edit/:id", component: PageEditOrderComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
