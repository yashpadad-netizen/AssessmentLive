import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartuserexamComponent } from './startuserexam.component';
import { StartuserexamRoutingModule } from './startuserexam-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [StartuserexamComponent],
  imports: [
    CommonModule,
    StartuserexamRoutingModule,
    FormsModule,ReactiveFormsModule

  ]
})
export class StartuserexamModule { }
