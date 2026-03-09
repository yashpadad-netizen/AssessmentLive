import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesearchComponent } from './certificatesearch.component';
import { CertificatesearchRoutingModule } from './certificatesearch-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CertificatesearchComponent],
  imports: [
    CommonModule,
    CertificatesearchRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class CertificatesearchModule { }
