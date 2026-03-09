import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainexamstartComponent } from './mainexamstart.component';
import { MainexamstartRoutingModule } from './mainexamstart-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainexamstartComponent],
  imports: [
    CommonModule,
    MainexamstartRoutingModule,
    FormsModule,ReactiveFormsModule,
  ]
})
export class MainexamstartModule { }
