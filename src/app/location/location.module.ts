import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { AlertComponent } from './alert/alert.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule, MatButtonModule, MatInputModule, MatFormField } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [ListComponent, AddComponent, AlertComponent, DetailsComponent, DialogComponent, CartComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    ReactiveFormsModule, 
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    //MatFormField
  ], 
  entryComponents: [
    DialogComponent
  ]
})

export class LocationModule { }
