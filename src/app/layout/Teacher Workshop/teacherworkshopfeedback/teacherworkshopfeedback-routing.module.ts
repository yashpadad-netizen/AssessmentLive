import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherworkshopfeedbackComponent } from './teacherworkshopfeedback.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherworkshopfeedbackComponent
  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeacherworkshopfeedbackRoutingModule { }
