import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  public collectionOrders$: Observable<Order[]>;
  public headers: string[];
  public states = Object.values(StateOrder);
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.collectionOrders$ = this.ordersService.collection;
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

  public changeState(item: Order, event) {
    this.ordersService.changeState(item, event.target.value).subscribe((result) => {
       item.state = result.state;
    });
  }

public testButton() {
  alert("Click sur le bouton !");
}


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
