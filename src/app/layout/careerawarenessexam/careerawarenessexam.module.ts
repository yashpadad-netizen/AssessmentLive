import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerawarenessexamComponent } from './careerawarenessexam.component';
import { CareerawarenessexamRoutingModule } from './careerawarenessexam-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CareerawarenessexamComponent
  ],
  imports: [
    CommonModule, CareerawarenessexamRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CareerawarenessexamModule { }
