import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CerttificateComponent } from './certtificate.component';
import { CerttificateRoutingModule } from './certtificate-routing.module';

@NgModule({
  declarations: [CerttificateComponent],
  imports: [
    CommonModule,
    CerttificateRoutingModule
  ],
  providers: [
    DatePipe
  ],
})
export class CerttificateModule { }
