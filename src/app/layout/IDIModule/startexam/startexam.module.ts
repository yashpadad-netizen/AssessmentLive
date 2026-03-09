import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartexamComponent } from './startexam.component';
import { StartexamRoutingModule } from './startexam-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StartexamComponent],
  imports: [
    CommonModule,
    StartexamRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class StartexamModule { }
