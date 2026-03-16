import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HappinessteacherfeedbackComponent } from './happinessteacherfeedback.component';
import { HappinessteacherfeedbackRoutingModule } from './happinessteacherfeedback-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HappinessteacherfeedbackComponent
  ],
  imports: [
    CommonModule, HappinessteacherfeedbackRoutingModule, ReactiveFormsModule
  ]
})
export class HappinessteacherfeedbackModule { }
