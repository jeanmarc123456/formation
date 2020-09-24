import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesordersComponent } from './pages/pagesorders/pagesorders.component';

const routes: Routes = [
  { path: "", component: PagesordersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
