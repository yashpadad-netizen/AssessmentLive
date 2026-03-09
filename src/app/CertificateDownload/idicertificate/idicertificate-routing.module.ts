import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IdicertificateComponent } from './idicertificate.component';

const routes: Routes = [
  {
      path: '',
      component: IdicertificateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdicertificateRoutingModule { }
