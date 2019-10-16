import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent implements OnInit {
  // form: FormGroup;
  // description:string;

  productForm = new FormGroup({
    name: new FormControl(""),
    price: new FormControl(0),
    stock: new FormControl(""),
    description: new FormControl("")
  });

  constructor(
    // private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    // @Inject(MAT_DIALOG_DATA) data
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log('DATA DIALOG CONFIG DI DIALOG: ', this.data);

    this.productForm.setValue({
      name: this.data.name,
      price: this.data.price,
      stock: this.data.stock,
      description: this.data.description
      // ditambahkan
    

    });
    // this.productForm = this.fb.group({
    //     description: [description, []],
    //     ...
  }

  save() {
    // yang kanan ngereplace yang kiri
    const data = {
      ...this.data,
      ...this.productForm.getRawValue()
    };
    delete data.__typename;
    delete data.orderItems
    console.log('DATA ON SAVE: ', data);
    this.dialogRef.close(data);
    // this.dialogRef.close(this.productForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
