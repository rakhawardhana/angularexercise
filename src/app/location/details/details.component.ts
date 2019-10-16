import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/products.service';

// import { privateEncrypt } from 'crypto';
import { APIService } from '../../API.service';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { OrderItemService } from 'src/app/core/order-item.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',  
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  product;
  quantityFormControl;
  
  constructor(private route: ActivatedRoute, public productsService: ProductsService, public orderItemService: OrderItemService, private api:APIService) {

    this.quantityFormControl = new FormControl(0)

   }

  
  async addToCart() {
    console.log(this.product, 'HALO');
    
    if (this.product) {

      const products = {
        //id: this.product.id,
        quantity: this.quantityFormControl.value,
        price: this.product.price,
        otherItemDetails: this.product.description,
        // order: this.product.order
        // product: {
        //     ...this.product
        // }
        orderItemProductId: this.product.id
      
      }

      
        if (this.product.stock >= products.quantity) {
          try {
            await this.api.CreateOrderItem(products);   
            //product.value = null
            console.log('jalan')
          }
          // await this.api.CreateOrderItem(products);   
          // //product.value = null
          // console.log('jalan')
         catch (error) {
          console.log("ERROR SUBMIT PRODUCT: ", error);
        }



      //   await this.api.CreateOrderItem(products);   
      //   //product.value = null
      //   console.log('jalan')
      // } catch (error) {
      //   console.log("ERROR SUBMIT PRODUCT: ", error);
        
      //product.value = null;
      } else {
        alert("dilarang input melebihi stock")
      }
  }
  };





  // async listCart(){
  //   let result = await this.api.ListOrderItems();
  //   this.allcart = result.items;
  // }


  // increase() {
  //     // this.cartService.updateCartItems(this.total+1);
  //     window.alert('coba!')

  // }

  // decrease() {
  //     // this.cartService.updateCartItems(this.total-1);
  //     window.alert('coba2!')
  // }


  async ngOnInit() {

    //  this.route.paramMap.subscribe(params => {
    //   this.product = this.productsService.product$[+params.get('product.id')];
    
    //  })

     const productId = this.route.snapshot.params['product.id']

      // const productId = this.route.snapshot.params['id'];

      // console.log('ID PRODUCT: ',productId);
      this.product = await this.api.GetProduct(productId)
    
    //   console.log(this.product)

    // this.product = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     const id = +params.get('product.id')
        
    //     return this.api.GetProduct(id)// http request
    //   })
      

     
     
    // )}

    
    }

  // this.products
  }

//}
