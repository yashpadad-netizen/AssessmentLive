import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeachertrainingfeedbackComponent } from './teachertrainingfeedback.component';

const routes: Routes = [
  { path: '', component: TeachertrainingfeedbackComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeachertrainingfeedbackRoutingModule { }
