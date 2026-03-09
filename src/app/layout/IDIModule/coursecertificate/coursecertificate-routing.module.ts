import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursecertificateComponent } from './coursecertificate.component';

const routes: Routes = [
  {
      path: '',
      component: CoursecertificateComponent
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
export class CoursecertificateRoutingModule { }
