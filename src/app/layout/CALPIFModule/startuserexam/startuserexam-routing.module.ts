import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StartuserexamComponent } from './startuserexam.component';

const routes: Routes = [
  {
      path: '',
      component: StartuserexamComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StartuserexamRoutingModule { }
