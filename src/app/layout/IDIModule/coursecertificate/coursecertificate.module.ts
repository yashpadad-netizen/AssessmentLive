import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CoursecertificateComponent } from './coursecertificate.component';
import { CoursecertificateRoutingModule } from './coursecertificate-routing.module';

@NgModule({
  declarations: [CoursecertificateComponent],
  imports: [
    CommonModule,
    CoursecertificateRoutingModule
  ],
  providers: [
    DatePipe
  ],
})
export class CoursecertificateModule { }
