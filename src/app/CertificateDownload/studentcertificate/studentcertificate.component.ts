import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare let jspdf;
import { AssessmentService } from 'src/app/shared/services/assessment.service';
import { DatePipe } from '@angular/common';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-studentcertificate',
  templateUrl: './studentcertificate.component.html',
  styleUrls: ['./studentcertificate.component.scss']
})
export class StudentcertificateComponent implements OnInit {
  userid;
  Coursename;
  name;
  course;
  grade;
  dateVal;
  studentid;
  examid;
  loading;
  date;
  CertificateGrade= 'A Grade - Above 75% | B Grade - 51% to 75% | C Grade - 35% to 50% | D Grade - 21% to 34% | E Grade - Below 20%';
  loaded
  constructor(private service: CalpifService,public datepipe: DatePipe,public route:ActivatedRoute) {

    this.userid = route.snapshot.params["id"];
    this.Coursename = route.snapshot.params["id1"];


    this.service.GetCertificate(this.userid,this.Coursename).subscribe((data: any) => {
            
      this.name = data.fullname;
      this.course = data.coursename;
      this.grade = this.Grade(data.total,data.outof)
      this.dateVal = data.examdate;
     this.studentid = data.username;
     this.examid= data.examid;
     this.loading = false;
    });

  }
  Grade(total,outof){

    var percentage = total / outof * 100
        if (percentage >= 76 && percentage <= 100) {
          return "A";
        }
        if (percentage >= 51 && percentage < 76) {
          return "B";
        }
        if (percentage >= 35 && percentage < 51) {
          return "C";
        }
        if (percentage >= 21 && percentage < 35) {
          return "D";
        }
        if (percentage >= 0 && percentage < 21) {
          return "E";
        }
    }
  ngOnInit() {
  }
  public captureScreen() {
    var imgWidth = 300;
    var pageHeight = 570;
    var imgHeight = 210;
    var heightLeft = imgHeight;
    let pdf = new jspdf('l', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    this.date=this.datepipe.transform(this.dateVal, ' d MMM y');

    pdf.addImage("assets/images/finalcertificate.jpg", 'PNG', 0, position, imgWidth, imgHeight);
    pdf.setFontSize(21);
    pdf.setFont("Arial")
    pdf.setFontType("bold")
    pdf.setTextColor(13, 12, 12);
    pdf.text(170, 96, this.name);
    pdf.text(130, 111,this.course);
    pdf.text(101, 125,this.date);
    pdf.text(200, 125,this.grade);
    pdf.setFontSize(8);
    pdf.text(269, 208,this.examid+'-');
    pdf.text(282, 208,this.studentid);
    pdf.text(10, 208,this.CertificateGrade);

    pdf.save('Ds Cerificate.pdf'); // Generated PDF
  }
}
