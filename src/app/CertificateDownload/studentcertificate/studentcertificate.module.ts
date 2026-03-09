import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { StudentcertificateComponent } from './studentcertificate.component';
import { StudentcertificateRoutingModule } from './studentcertificate-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentcertificateComponent],
  imports: [
    CommonModule,
    StudentcertificateRoutingModule,
    FormsModule, ReactiveFormsModule 
  ],
  providers: [
    DatePipe
  ],
})
export class StudentcertificateModule { }
