import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/classfiles/user';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

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
  userattempt;
  standard;
  newexamcoursename;
  newexamuserattempt;
  subject
  setid;
  UserId
  gradedata;
  certificateStatus = false;

  constructor(private service: CalpifService, private route: ActivatedRoute, private router: Router) {

    this.userid = localStorage.getItem('UserId');
    this.programid = localStorage.getItem('Programid');
    this.routesetid = route.snapshot.params["id"];

    this.FullName = localStorage.getItem('FullName');
    this.UserValues = JSON.parse(sessionStorage.getItem('Uservalue'));
    this.coursename = JSON.parse(sessionStorage.getItem('coursename'));
    this.ExamResult = JSON.parse(sessionStorage.getItem('ExamResult'));

    this.examscore = this.ExamResult.totalmark;
    this.username = this.UserValues.username;
    this.totalmarks = this.ExamResult.totquestion;



    this.setid = JSON.parse(sessionStorage.getItem('SetID'));
    this.UserId = JSON.parse(sessionStorage.getItem('UserID'));

    this.service.GetGrade(this.UserId, this.setid).subscribe((data) => {
      this.grade = data[0].grade;
      this.percentage = data[0].percentage;
    })

    var splitted = this.coursename.split(" ", 2);
    this.standard = splitted[1];

    let userc1 = new User();
    userc1.username = this.username;
    userc1.coursename = this.coursename;
    this.service.StaticData(userc1).subscribe((data: any) => {
      this.userattempt = data.examcount;
    })

    if (this.coursename == "Introduction to Generative Artificial Intelligence") {
      this.newexamcoursename = "Introduction to Artificial Intelligence";
      this.subject = "Artificial Intelligence"
    }
    else if (this.coursename == "Introduction to Artificial Intelligence") {      
      this.newexamcoursename = "Introduction to Generative Artificial Intelligence";
      this.subject = "Artificial Intelligence"
    }
    else if (this.coursename == "STD " + this.standard + " - Maths Endline") {
      this.newexamcoursename = "STD " + this.standard + " - Language Endline";
      this.subject = "Language"
    }
    else if (this.coursename == "STD " + this.standard + " - Maths Midline") {
      this.newexamcoursename = "STD " + this.standard + " - Language Midline";
      this.subject = "Language"
    }
    else if (this.coursename == "STD " + this.standard + " - Language Endline") {
      this.newexamcoursename = "STD " + this.standard + " - Maths Endline";
      this.subject = "Maths"
    }
    else if (this.coursename == "STD " + this.standard + " - Language Midline") {
      this.newexamcoursename = "STD " + this.standard + " - Maths Midline";
      this.subject = "Maths"
    }
    let userc2 = new User();
    userc2.username = this.username;
    userc2.coursename = this.newexamcoursename;
    
    this.service.StaticData(userc2).subscribe((data: any) => {
      this.newexamuserattempt = data.examcount;
    })
  }



  ngOnInit() {
    if (this.coursename == 'Introduction to Generative Artificial Intelligence' || this.coursename == 'Introduction to Artificial Intelligence') {
      this.service.GetCourseAttempt(this.userid).subscribe((res) => {
        if (res == 'No') {
          this.certificateStatus = false;
        }
        else {
          this.certificateStatus = true;
        }
      })
    }
  }
  Certificate() {
    let url = this.router.createUrlTree(['/CALPIFCertificate', this.username, this.coursename])
    window.open(url.toString(), '_blank')
  }

  Reexam() {
    this.router.navigate(['/CALPIFReexam', this.routesetid]);
  }
  dashboard() {
    sessionStorage.removeItem('coursename');
    this.router.navigate(['/CALPIFDashBoard']);
  }

}