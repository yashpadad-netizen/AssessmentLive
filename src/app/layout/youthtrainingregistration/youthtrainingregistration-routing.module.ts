import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YouthtrainingregistrationComponent } from './youthtrainingregistration.component';

const routes: Routes = [
  { path: '', component: YouthtrainingregistrationComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class YouthtrainingregistrationRoutingModule { }
