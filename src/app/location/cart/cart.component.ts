import { Component, OnInit } from '@angular/core';
import { OrderItemService } from "../../core/order-item.service";
import { APIService, UpdateOrderInput } from "../../API.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {  



  order$;

  allOrderItem: any = [];
  constructor(
    public OrderItemService: OrderItemService,
    private api: APIService
    ) 
    { }


    async getCart() {
      let result = await this.api.ListOrderItems();
      this.allOrderItem = result.items;
      console.log("jalan", this.allOrderItem);
    }

  async ngOnInit() {
     
      let result = await this.api.ListOrderItems();
      this.allOrderItem = result.items;
      console.log("jalan", this.allOrderItem);
    
  }

}
