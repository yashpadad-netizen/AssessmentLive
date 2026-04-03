import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouthtrainingregistrationComponent } from './youthtrainingregistration.component';
import { YouthtrainingregistrationRoutingModule } from './youthtrainingregistration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    YouthtrainingregistrationComponent
  ],
  imports: [
    CommonModule, YouthtrainingregistrationRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class YouthtrainingregistrationModule { }
