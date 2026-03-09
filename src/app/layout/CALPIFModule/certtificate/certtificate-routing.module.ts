import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CerttificateComponent } from './certtificate.component';
const routes: Routes = [
  {
      path: '',
      component: CerttificateComponent
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
export class CerttificateRoutingModule { }
