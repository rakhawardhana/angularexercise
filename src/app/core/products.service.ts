import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {
  ListProductsQuery,
  CreateProductInput,
  ModelProductFilterInput,
  APIService,
  UpdateProductInput
} from "../API.service";

import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  _filter$ = new BehaviorSubject<ModelProductFilterInput>(null);
  _limit$ = new BehaviorSubject<number>(10);
  _nextToken$ = new BehaviorSubject<string>(null);

  filter$ = this._filter$.asObservable();
  limit$ = this._limit$.asObservable();
  nextToken$ = this._nextToken$.asObservable();

  constructor(public api: APIService) {}

  // products = [
  //   {
  //     name: 'Mac Book',
  //     price: 799,
  //     description: 'A large phone with one of the best screens'
  //   },
  //   {
  //     name: 'Phone Mini',
  //     price: 799,
  //     description: 'A great phone with one of the best cameras'
  //   },
  //   {
  //     name: 'Phone Standard',
  //     price: 799,
  //     description: 'Standart aja lah ya'
  //   }
  // ];

  product$: Observable<ListProductsQuery["items"]> = combineLatest(
    this.filter$,
    this.limit$,
    this.nextToken$
  ).pipe(
    map(data => ({ filter: data[0], limit: data[1], nextToken: data[2] })),
    switchMap(data =>
      this.api.ListProducts(data.filter, data.limit, data.nextToken)
    ),
    map(result => {
      console.log("result: ", result.items);
      return result.items;
    })
  );

  create(input: CreateProductInput) {
    return this.api.CreateProduct(input);
  }

  delete(id: string) {
    return this.api.DeleteProduct({ id });
  }

  update(input: UpdateProductInput) {
    return this.api.UpdateProduct(input);
  }

  setFilter(filter: ModelProductFilterInput) {
    this._filter$.next(filter);
  }

  setLimit(limit: number) {
    this._limit$.next(limit);
  }

  setNextToken(nextToken: string) {
    this._nextToken$.next(nextToken);
  }
}
