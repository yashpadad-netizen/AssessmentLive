import { Component, OnInit } from '@angular/core';
import { AssessmentService } from 'src/app/shared/services/assessment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/classfiles/user';

@Component({
  selector: 'app-examresult',
  templateUrl: './examresult.component.html',
  styleUrls: ['./examresult.component.scss']
})
export class ExamresultComponent implements OnInit {
  examid;
  userid;
  euserid;
  examreport;
  icon;
  color;
  certificate;
  courseid;
  grade;
  UserValues;
  coursename;
  ExamResult;
  totalmarks;
  FullName;
  examscore;
  percentage;
  username;
  programid;
  routesetid;
  userattempt
  constructor(private service: AssessmentService, private route: ActivatedRoute, private router: Router) {
    this.routesetid = route.snapshot.params["id"];
    this.userid = localStorage.getItem('UserId');
    this.programid = localStorage.getItem('Programid');

    this.FullName = localStorage.getItem('FullName');
    this.UserValues = JSON.parse(sessionStorage.getItem('Uservalue'));
    this.coursename = this.UserValues.coursename;
    this.totalmarks = this.UserValues.totalmarks;
    this.ExamResult = JSON.parse(sessionStorage.getItem('ExamResult'));
    this.examscore = this.ExamResult.totalmark;
    this.grade = this.ExamResult.grade;
    this.percentage = this.ExamResult.percentage;
    this.username = this.UserValues.username;
    let userc1 = new User();
    userc1.username = this.username;
    userc1.coursename = this.coursename;
    this.service.StaticData(userc1).subscribe((data: any) => {
      this.userattempt = data.examcount;
    })
  }



  ngOnInit() {
  }
  Certificate() {

    if (this.coursename == 'Digital and 21st Century Skills (Youth) - Baseline' || this.coursename == 'Digital Literacy (Adolescent) - Baseline' || this.coursename == 'Digital and Financial Literacy (Women) - Baseline' || this.coursename == 'Digital and 21st Century Skills (Youth)' || this.coursename == 'Digital Literacy (Adolescent)' || this.coursename == 'Digital and Financial Literacy (Women)' || this.coursename == 'Employability Skills' || this.coursename == 'Financial Literacy Skills') {
      let url = this.router.createUrlTree(['/IDICertificate', this.username, this.coursename])
      window.open(url.toString(), '_blank')
    }
    else {
      let url = this.router.createUrlTree(['/CALPIFCertificate', this.username, this.coursename])
      window.open(url.toString(), '_blank')
    }
  }
  Feedback() {
    this.service.CheckStudentFeedback(this.username).subscribe((res => {
      if (res == 'Exist') {
        alert('Feedback Already Exist')
      }
      else {
        let url = this.router.createUrlTree(['/DSFeedback'])
        window.open(url.toString(), '_blank')
      }
    }))
  }
  Reexam() {
    this.router.navigate(['/IDIReexam', this.routesetid]);
  }
}