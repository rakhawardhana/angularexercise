import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit {

  @Input() product;            // property
  @Output() notify = new EventEmitter<any>();
  constructor() { } 


  ngOnInit() {
  }

  notif() {
    this.notify.emit();
  } // supaya fungsi onNotifynya kepanggil

  // products
  // constructor(public productsService: ProductsService) { }

  // ngOnInit() {

  //   this.products = this.productsService.products
  // }

}
