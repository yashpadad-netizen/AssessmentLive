import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DsfeedbackComponent } from './dsfeedback.component';

const routes: Routes = [
  {
      path: '',
      component: DsfeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsfeedbackRoutingModule { }
