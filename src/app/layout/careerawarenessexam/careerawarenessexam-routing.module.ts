import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CareerawarenessexamComponent } from './careerawarenessexam.component';

const routes: Routes = [
  {
    path: '',
    component: CareerawarenessexamComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CareerawarenessexamRoutingModule { }
