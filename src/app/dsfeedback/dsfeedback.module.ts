import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsfeedbackComponent } from './dsfeedback.component';
import { DsfeedbackRoutingModule } from './dsfeedback-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DsfeedbackComponent],
  imports: [
    CommonModule,
    DsfeedbackRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class DsfeedbackModule { }
