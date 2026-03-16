import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HappinessteacherfeedbackComponent } from './happinessteacherfeedback.component';

const routes: Routes = [
  { path: '', component: HappinessteacherfeedbackComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HappinessteacherfeedbackRoutingModule { }
