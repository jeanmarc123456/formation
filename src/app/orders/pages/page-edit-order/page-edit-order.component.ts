import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {


  public order$: Observable<Order>;
    constructor(
      private orderService: OrdersService,
      private currentRoute: ActivatedRoute,
      private router: Router,
    ) { }

  ngOnInit(): void {
    this.order$ = this.currentRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {

        return this.orderService.getOrderById(params.get("id"));

      })
    )
  }

public edit(item: Order) {
this.orderService.updateOrder(item).subscribe(
   (result) => {
    this.router.navigate(['orders']);
});}


}
