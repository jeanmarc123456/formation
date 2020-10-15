import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, pipe } from 'rxjs';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((col) => {
        return col.map((item) => {
          return new Order(item);
        })
      })
    );
  }

  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({...item});
    obj.state = state;
    return this.updateOrder(obj);
  }

  public updateOrder(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }

  public addOrder(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}orders`, item);
  }

  public deleteOrder(item: Order): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}orders/${item.id}`);
  }

  public getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}orders/${id}`);
  }

  public getOrderByClientName(name: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.urlApi}orders?client=${name}`).pipe(
      map((col) => {
        return col.map((item) => {
          return new Order(item);
        })
      })
    )
  }
  public getOrder2ByClientName(name: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.urlApi}orders2?client=${name}`).pipe(
      map((col) => {
        return col.map((item) => {
          return new Order(item);
        })
      })
    )}


    public getAllOrderByClientName(name: string): Observable<Order[]> {
      return forkJoin([this.getOrderByClientName(name), this.getOrder2ByClientName(name)]).pipe(
        map((cols) => {
        return cols[0].concat(cols[1])
        })
      )
    }
}
