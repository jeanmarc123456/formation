import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-pagesorders',
  templateUrl: './pagesorders.component.html',
  styleUrls: ['./pagesorders.component.scss']
})
export class PagesordersComponent implements OnInit {

  private subscription: any;
  constructor(private orderservice: OrderService) { }

  ngOnInit(): void {
    this.subscription = this.orderservice.collection.subscribe(
      (datas) => {
        console.log(datas);
        let order = new Order(datas[0]);
        console.log(order.totalHt())
      })

  }

}
