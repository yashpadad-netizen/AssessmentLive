import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreplacementfeedbackComponent } from './preplacementfeedback.component';

const routes: Routes = [
  {
    path:'',
    component:PreplacementfeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreplacementfeedbackRoutingModule { }
