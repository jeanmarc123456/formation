import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-recap-order',
  templateUrl: './page-recap-order.component.html',
  styleUrls: ['./page-recap-order.component.scss']
})
export class PageRecapOrderComponent implements OnInit {

  public collectionOrder$: Observable<Order[]>;
  public states = Object.values(StateOrder);
  public tableHeaders: string[];
  public listCollection$: Observable<[Order[], Order[]]>;
  public listOrder1: Order[];
  public listOrder2: Order[];


  constructor(
    private orderService:  OrdersService,
    private clientservice: ClientsService,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  //   this.collectionOrder$ = this.currentRoute.paramMap.pipe(
  //   switchMap(
  //     (params: ParamMap) => {
  //       return this.clientservice.getItemById(params.get("id")).pipe(
  //         switchMap(
  //           (client) => {
  //             return this.orderService.getOrderByClientName(client.name)
  //           }
  //         )
  //       )
  //     })
  //   )
    this.collectionOrder$ = this.currentRoute.paramMap.pipe(
      mergeMap(
        (params: ParamMap) => {
          return this.clientservice.getItemById(params.get("id")).pipe(
            mergeMap(
              (client) => {
                return this.orderService.getAllOrderByClientName(client.name)
              }
            )
          )
        })
      )

    this.tableHeaders = [
    "Type",
   "Client",
    "Nb. Jour",
    "Tjm Ht",
    "Total Ht",
    "Total TTC",
    "Stat",
    "Actions"
    ]

    // this.listCollection$ = this.currentRoute.paramMap.pipe(
    //   mergeMap(
    //     (params: ParamMap) => {
    //       return this.clientservice.getItemById(params.get("id")).pipe(
    //         mergeMap(
    //           (client) => {
    //             return this.orderService.getAllOrderByClientName(client.name)
    //           }
    //         )
    //       )
    //     })
    //   )


    // this.listCollection$.subscribe(
    //   (cols) => {
    //     this.listOrder1 = cols[0];
    //     this.listOrder2 = cols[1];
    //   }
    // )
    }


  public changeState(item: Order, event) {
    this.orderService.changeState(item, event.target.value).subscribe((result) => {
       item.state = result.state;
    });
  }


}
