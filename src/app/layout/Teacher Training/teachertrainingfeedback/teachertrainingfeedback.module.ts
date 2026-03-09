import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachertrainingfeedbackComponent } from './teachertrainingfeedback.component';
import { TeachertrainingfeedbackRoutingModule } from './teachertrainingfeedback-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeachertrainingfeedbackComponent
  ],
  imports: [
    CommonModule, TeachertrainingfeedbackRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class TeachertrainingfeedbackModule { }
