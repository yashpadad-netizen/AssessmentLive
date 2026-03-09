import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesearchComponent } from './certificatesearch.component';

const routes: Routes = [
  {
      path: '',
      component: CertificatesearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificatesearchRoutingModule { }
