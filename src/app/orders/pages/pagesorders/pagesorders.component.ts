import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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
  public collectionOrders$: Subject<Order[]> = new Subject();
  public headers: string[];
  public states = Object.values(StateOrder);
  constructor(
    private ordersService: OrdersService,
    private router: Router){}

  ngOnInit(): void {
    this.ordersService.collection.subscribe(
      (collection) => {
        this.collectionOrders$.next(collection);
      }
    );
    this.headers = [
          'Type',
          'Client',
          'Nb. Jours',
          'Tjm HT',
          'Total HT',
          'Total TTC',
          'State',
          'Actions'

    ];

  }

  public changeState(item: Order, event) {
    this.ordersService.changeState(item, event.target.value).subscribe((result) => {
       item.state = result.state;
    });
  }



public edit(item: Order) {
    this.router.navigate(["orders","edit", item.id])
}

public delete(item: Order) {
  this.ordersService.deleteOrder(item).subscribe(
    (res) => {
    this.ordersService.collection.subscribe(
      (collection) => {
        this.collectionOrders$.next(collection);
      }
    )}
  )
}

public testButton() {
  alert("Click sur le bouton !");
}


  ngOnDestroy(): void {

  }
}
