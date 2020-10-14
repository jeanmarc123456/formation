import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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
  public modalValues: Order;
  @ViewChild('updateOrderModal') updateOrderModalRef: TemplateRef<any>
  private currentActiveModal: NgbModalRef;

    constructor(
      private orderService: OrdersService,
      private currentRoute: ActivatedRoute,
      private router: Router,
      private modalService: NgbModal,
    ) { }

  ngOnInit(): void {
    this.order$ = this.currentRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {

        return this.orderService.getOrderById(params.get("id"));

      })
    )
  }

public openUpdateModal(values: any) {
  this.modalValues = values;
  this.currentActiveModal = this.modalService.open(this.updateOrderModalRef);

}

public dismissModal() {
  this.currentActiveModal.dismiss();
}



public edit(item: Order) {
this.orderService.updateOrder(item).subscribe(
   (result) => {
    this.dismissModal();
    this.router.navigate(['orders']);
});}


}
