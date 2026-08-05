import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobilizeregistrationRoutingModule } from './mobilizeregistration-routing.module';
import { MobilizeregistrationComponent } from './mobilizeregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MobilizeregistrationComponent
  ],
  imports: [
    CommonModule,
    MobilizeregistrationRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class MobilizeregistrationModule { }
