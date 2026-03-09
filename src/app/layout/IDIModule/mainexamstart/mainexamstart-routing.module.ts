import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainexamstartComponent } from './mainexamstart.component';

const routes: Routes = [
  {
      path: '',
      component: MainexamstartComponent
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
export class MainexamstartRoutingModule { }

