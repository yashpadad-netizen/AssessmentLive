import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-certtificate',
  templateUrl: './certtificate.component.html',
  styleUrls: ['./certtificate.component.scss']
})
export class CerttificateComponent implements OnInit {

  loaded
  username;
  examid;
  strwhr;
  certificatedata;
  name;
  course;
  grade;
  stdate;
  endate;
  dependancyid;
  enddate;
  startdate;
  enddate1;
  fcolorl
  standard;
  dateVal;
  date;
  studentid;
  loading = true;
  CertificateGrade = 'A Grade - Above 75% | B Grade - 51% to 75% | C Grade - 35% to 50% | D Grade - 21% to 34% | E Grade - Below 20%';
  UserValues;
  Coursename
  constructor(private service: CalpifService, public datepipe: DatePipe, public route: ActivatedRoute) {

    this.username = route.snapshot.params["id"];
    this.Coursename = route.snapshot.params["id1"];


    this.service.GetCertificate(this.username, this.Coursename).subscribe((data: any) => {
      this.name = data.fullname;
      this.dateVal = data.examdate;
      this.loading = false;
    });

  }

  ngOnInit() {
  }

  public captureScreen() {
    
    let pdf = new jspdf('l', 'mm', 'a4');

    var imgWidth = 300;
    var pageHeight = 570;
    var imgHeight = 210;
    var heightLeft = imgHeight;
    // A4 size page of PDF
    var position = 0;
    this.date = this.datepipe.transform(this.dateVal, ' d MMM y');

    pdf.addImage("assets/images/MicrosoftCertificate.jpg", 'PNG', 0, position, imgWidth, imgHeight);
    pdf.setFontSize(24);
    pdf.setFont("Arial")
    pdf.setFontType("bold")
    pdf.setTextColor(13, 12, 12);

    // Get page width
    var pageWidth = pdf.internal.pageSize.getWidth();

    // Calculate center position for text
    var nameWidth = pdf.getTextWidth(this.name);
    var nameX = (pageWidth - nameWidth) / 2;

    // pdf.text(130, 98, this.name);
    pdf.text(nameX, 98, this.name);
    pdf.text(145, 134, this.date);
    pdf.setFontSize(8);

    // Generated PDF
    pdf.save("Microsoft Cerificate.pdf");
  }
}
