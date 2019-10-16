import { Injectable } from '@angular/core';
import {ListOrderItemsQuery, CreateOrderItemInput, ModelOrderItemFilterInput, APIService, GetOrderItemQuery} from '../API.service';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class OrderItemService {
  // listorders = subject penampung 
  _listOrderItems$ = new BehaviorSubject<ListOrderItemsQuery['items']>([]);
  _filter$ = new BehaviorSubject<ModelOrderItemFilterInput>(null);
  _limit$ = new BehaviorSubject<number>(null);
  _nextToken$ = new BehaviorSubject<string>(null);
  _isRequestToApi = new BehaviorSubject<boolean>(true);

  filter$ = this._filter$.asObservable();
  limit$ = this._limit$.asObservable();
  nextToken$ = this._nextToken$.asObservable();
  listOrderItems$ = this._listOrderItems$.asObservable();

  constructor(public api: APIService) {
    this.api.OnCreateOrderItemListener.subscribe({
      next: (data: GetOrderItemQuery) => {
        
        // tadinya di comment
        console.log('ON CREATE ORDER ITEM', data);
        this._listOrderItems$.next([...this._listOrderItems$.value, data]);
      }
    })
  }
  
  orderItems$: Observable<ListOrderItemsQuery['items']> = combineLatest(
    this.filter$,
    this.limit$,
    this.nextToken$
  ).pipe(
    map(data => ({ filter: data[0], limit: data[1], nextToken: data[2] })),
    switchMap(data => 
      this.api.ListOrderItems(data.filter, data.limit, data.nextToken)
    ),
    map(result => {
      // this._listOrders$.next(result.items);
      return result.items;
    })
  );

  create(input: CreateOrderItemInput) {
    return this.api.CreateOrderItem(input)
  }

  delete(id: string) {
    return this.api.DeleteOrderItem({id})

  }

  setFilter(filter: ModelOrderItemFilterInput){
    this._filter$.next(filter);
  }

  setLimit(limit: number) {
    this._limit$.next(limit);
  }

  setNextToken(nextToken: string) {
    this._nextToken$.next(nextToken);
  }

  // async ngOnInit() {
  //   let result = await this.api.ListOrderItems();
  //   this.order$ = result.items;

  //   this.api.OnCreateOrderItemListener.subscribe({
  //     next: (todo:any) => {
  //       let newOrder = order$.value.data.onCreateOrderItem;
  //       this.order$.push(newOrder);
  //     }
  //   })
  // }
}
