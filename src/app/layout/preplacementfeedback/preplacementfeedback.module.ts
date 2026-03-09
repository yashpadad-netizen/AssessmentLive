import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreplacementfeedbackRoutingModule } from './preplacementfeedback-routing.module';
import { PreplacementfeedbackComponent } from './preplacementfeedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PreplacementfeedbackComponent
  ],
  imports: [
    CommonModule,
    PreplacementfeedbackRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class PreplacementfeedbackModule { }
