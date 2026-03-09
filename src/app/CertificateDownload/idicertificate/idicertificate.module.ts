import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IdicertificateComponent } from './idicertificate.component';
import { IdicertificateRoutingModule } from './idicertificate-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IdicertificateComponent],
  imports: [
    CommonModule,
    IdicertificateRoutingModule,
    FormsModule, ReactiveFormsModule 
  ],
  providers: [
    DatePipe
  ],
})
export class IdicertificateModule { }
