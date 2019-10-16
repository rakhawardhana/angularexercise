import { Injectable } from '@angular/core';
import { APIService,
  ListOrdersQuery,
  CreateOrderInput,
  ModelOrderFilterInput,

} from '../API.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  _listOrders$ = new BehaviorSubject<ListOrdersQuery['items']>([]);
  _filter$ = new BehaviorSubject<ModelOrderFilterInput>(null);
  _limit$ = new BehaviorSubject<number>(10);
  _nextToken$ = new BehaviorSubject<string>(null);

  filter$ = this._filter$.asObservable();
  limit$ = this._limit$.asObservable();
  nextToken$ = this._nextToken$.asObservable();

  constructor(public api: APIService) {
    // bikin subscribe atas listener    

   }


  order$: Observable<ListOrdersQuery["items"]> = combineLatest(
    this.filter$,
    this.limit$,
    this.nextToken$
  ).pipe(
    map(data => ({ filter: data[0], limit: data[1], nextToken: data[2] })),
    switchMap(data =>
      this.api.ListOrders(data.filter, data.limit, data.nextToken)
    ),
    map(result => result.items)
  );


  create(input: CreateOrderInput) {
    return this.api.CreateOrder(input)
  }

  delete(id: string) {
    return this.api.DeleteOrder({id})

  }

  setFilter(filter: ModelOrderFilterInput){
    this._filter$.next(filter);
  }

  setLimit(limit: number) {
    this._limit$.next(limit);
  }

  setNextToken(nextToken: string) {
    this._nextToken$.next(nextToken);
  }
  
 
}

