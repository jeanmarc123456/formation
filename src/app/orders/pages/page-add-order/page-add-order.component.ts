import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public modalValues: Order;
  private currentActiveModal: NgbModalRef;
    @ViewChild('createOrderModal') createOrderModalRef: TemplateRef<any>

  constructor(
    private orderService: OrdersService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
  }

  public openUpdateModal(values: any) {
    this.modalValues = values;
    this.currentActiveModal = this.modalService.open(this.createOrderModalRef);

  }

  public dismissModal() {
    this.currentActiveModal.dismiss();
  }


  public addOrder(order: Order){
    this.orderService.addOrder(order).subscribe(
      (response)=> {
        // this.router.navigate(['orders']);
        this.dismissModal();
        this.router.navigate(['../'], {relativeTo: this.currentRoute})
      }
    )
  }
}
