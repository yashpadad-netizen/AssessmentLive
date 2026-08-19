import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherworkshopfeedbackComponent } from './teacherworkshopfeedback.component';
import { TeacherworkshopfeedbackRoutingModule } from './teacherworkshopfeedback-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeacherworkshopfeedbackComponent
  ],
  imports: [
    CommonModule, TeacherworkshopfeedbackRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class TeacherworkshopfeedbackModule { }
