import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare let jspdf;
import { AssessmentService } from 'src/app/shared/services/assessment.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-idicertificate',
  templateUrl: './idicertificate.component.html',
  styleUrls: ['./idicertificate.component.scss']
})
export class IdicertificateComponent implements OnInit {

  userid;
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
  startdate:string;
  enddate1:string;
  fcolor;
  Coursename;
  loading = true;

  constructor(private service: AssessmentService, private route: ActivatedRoute,public datepipe: DatePipe) {

    this.userid = route.snapshot.params["id"];
    this.Coursename = route.snapshot.params["id1"];

    this.service.GetCertificate(this.userid,this.Coursename).subscribe((data: any) => {
      
      this.name = data.fullname;
      this.course = data.coursename;
      this.grade = data.ograde;

      this.stdate =this.datepipe.transform(data.stdate, ' d MMM y');
      this.endate =this.datepipe.transform(data.eddate, ' d MMM y');

      
     this.loading = false;
    });
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
    pdf.addImage("assets/images/certificate1.jpg", 'PNG', 0, position, imgWidth, imgHeight);
    pdf.setFontSize(23);
    pdf.setFont("Arial")
    pdf.setFontType("bold")
    pdf.setTextColor(13, 12, 12);
    pdf.text(140, 97, this.name);
    if(this.course == 'Financial Literacy Skill'){
      
      pdf.setTextColor(0,153,0);
      pdf.text(75, 125,'Digital Sakshar for '+this.course);

    }
    else{
      pdf.setTextColor(204,0,0);
      pdf.text(90, 125,'Digital Sakshar for '+this.course);

    }
   
    pdf.setTextColor(13, 12, 12);

    pdf.text(176, 137, this.grade);
    pdf.setFontSize(21);
     pdf.text(130, 150, this.stdate);
    pdf.text(190, 150, this.endate);


    pdf.save('Ds Cerificate.pdf'); // Generated PDF
  }
}
