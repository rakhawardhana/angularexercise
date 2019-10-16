import { Component, OnInit, OnDestroy, AfterContentInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { ProductsService } from "../../core/products.service";
import { APIService, UpdateProductInput } from "../../API.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  //name = 'rakha'

  product$;

  productForm;

  // bisa didefinisikan disini atau di constructor
  // productForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   stock: new FormControl(''),
  //   description: new FormControl('')
  // });
  

  allProduct: any = [];
  constructor(
    public productsService: ProductsService,
    private api: APIService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {
    // panggil di oninit, gak akan bisa karena keburu kerender
    // this.productForm = this.formBuilder.group({
    //   name: '',
    //   price: '',
    //   stock: 0,
    //   description: ''
    // });


    //define new instance dari class
    this.productForm = new FormGroup({
      name: new FormControl(""),
      price: new FormControl(0),
      stock: new FormControl(""),
      description: new FormControl("")
    });
  }

  
  async ngOnInit() {
    // console.log("jalan");
    // let result = await this.api.ListProducts();
    // this.allProduct = result.items;

    // this.api.OnCreateProductListener.subscribe({
    //   next: (product: any) => {
    //     let newProduct = product.value.data.onCreateProduct;
    //     this.allProduct.push(newProduct);
    //     //console.log(newProduct)
    //   }
    // });

    // // this.productForm = this.formBuilder.group({
    // //   name: '',
    // //   price: '',
    // //   stock: 0,
    // //   description: ''
    // // });

    // console.log("FORM: ", this.productForm);
    // console.log(this.allProduct);
    // //this.product$ = this.productsService.product$
  }

  async onSubmit() {
    // Process checkout data here
    console.warn("Your order has been submitted", this.productForm);
    // async addProduct(product$) {
    if (this.productForm.value) {
      const product = {
        ...this.productForm.getRawValue()
      };

      // const object = {
      //   name: 'dika',
      //   umur: 21
      // }

      // const dataBaru = {...object}

      console.log("PAYLOAD: ", product);

      try {
        await this.api.CreateProduct(product);
        this.productForm.reset();
      } catch (error) {
        console.log("ERROR SUBMIT PRODUCT: ", error);
      }
    }
  }

  // async addProduct(product$) {
  //   if (product$.value.length) {
  //     const product$ = {
  //       id: product.id.value,
  //       name: product.quantity.value,
  //       price: product.price.value,
  //       stock: product.Detail.value,
  //       size : product.size.value ,
  //       description: product.description.value,
  //     }
  //     await this.api.CreateProduct(product$);
  //     product$.value = null;

  //   }

  // }

  async getProduct() {
    let result = await this.api.ListProducts();
    this.allProduct = result.items;
    console.log("jalan");
  }

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    console.log("X");
    window.alert("You will be notified when the product goes on sale");
  }

  // ngOnInit() {
  //   this.product$ = this.productsService.product$
  // }

  openDialog(product: any) {
    console.log("DIALOG CLICKED: ", product);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = product;

    // this.dialog.open(DialogComponent, dialogConfig);

    // this.dialog.afterClosed().subscribe(result => {
    //   alert("response: " + result)
    // });
    // 
    // this.dialog.open(DialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: UpdateProductInput) => {
      console.log("Dialog output:", data);
      if (data) {
        this.updateProduct(data);
      }
      
    });
  }

  async updateProduct(input: UpdateProductInput) {
    try {
      // hasil callback dari mutation
      const data = await this.productsService.update(input);
      this.productsService.setLimit(20);
      console.log('Callback update product: ', data);
    } catch (error) {
      console.log('Error on update product: ', error);
    }
  }
}
