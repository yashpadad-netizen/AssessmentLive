import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssessmentService } from 'src/app/shared/services/assessment.service';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-certificatesearch',
  templateUrl: './certificatesearch.component.html',
  styleUrls: ['./certificatesearch.component.scss']
})
export class CertificatesearchComponent implements OnInit {

  constructor(private service: CalpifService, private router: Router) { }

  ngOnInit() {
  }
  courselist;
  nullmsg;
  courseundefined;
  userid
  Serachdata(userid) {

    this.userid = userid;

    this.service.GetCourse(userid).subscribe((data: any) => {
      if (data.length != 0) {
        this.courselist = data;
        this.nullmsg = null;
      }
      else {
        this.nullmsg = 'Exam Not Given';
        this.courselist = null;
      }
      console.log(this.courselist);


    })

  }
  Getcertificate(Course) {

    if (Course != undefined) {

      if (Course == 'Employability Skills' || Course == 'Financial Literacy Skills') {
        this.router.navigate(["/IDIDownloadCertificate", this.userid, Course]);
      }
      else {
        this.router.navigate(["/DownloadCertificate", this.userid, Course]);

      }
    }
    else {
      this.courseundefined = 'Please Select Course'
    }
  }

}