import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-pagesorders',
  templateUrl: './pagesorders.component.html',
  styleUrls: ['./pagesorders.component.scss']
})
export class PagesordersComponent implements OnInit {

  private subscription: any;
  public collectionOrders: Order[];
  public headers: string[];
  public states = Object.values(StateOrder);
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.subscription = this.ordersService.collection.subscribe(
      (datas) => {
        this.collectionOrders = datas;
        this.headers = [
          'Type',
          'Client',
          'Nb. Jours',
          'Tjm HT',
          'Total HT',
          'Total TTC',
          'State'
        ];
      }
    )
  }

  public changeState(item: Order, event) {
    this.ordersService.changeState(item, event.target.value).subscribe((result) => {
       item.state = result.state;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
