import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamresultComponent } from './examresult.component';
import { ExamresultRoutingModule } from './examresult-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExamresultComponent],
  imports: [
    CommonModule,
    ExamresultRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ExamresultModule { }
