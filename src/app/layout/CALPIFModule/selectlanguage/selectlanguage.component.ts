import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-selectlanguage',
  templateUrl: './selectlanguage.component.html',
  styleUrls: ['./selectlanguage.component.scss']
})
export class SelectlanguageComponent implements OnInit {

  examid;
  userid;
  ExamMaster;
  examname;
  noofquestion;
  markperquestion;
  noofmin;
  validtill;
  euserid;
  regTypeSelectedOption: string = "";
  course;
  languagename;
  UserValues;
  totalmarks;
  loading = true;

  constructor(private router: Router, private service: CalpifService) {

    this.userid = localStorage.getItem('UserId');
    this.UserValues = JSON.parse(sessionStorage.getItem('Uservalue'));

    if (localStorage.getItem('cq') != null) {
      this.router.navigate(['/login'])
    }
    this.course = JSON.parse(sessionStorage.getItem('coursename'));

    this.totalmarks = this.UserValues.totalmarks;

    this.service.GetLanguage(this.course).subscribe((data: any) => {
      this.languagename = data;
      this.loading = false;
    });

  }


  ngOnInit() {
  }
  onchangedpd(language) {


    // this.course = this.UserValues.coursename;
    this.course = JSON.parse(sessionStorage.getItem('coursename'));

    if (this.course.includes("Introduction to Artificial Intelligence")) {
      this.totalmarks = 20;
    }
    else if (this.course.includes("Introduction to Generative Artificial Intelligence")) {
      this.totalmarks = 20;
    }

    var min = this.totalmarks * 2;
    this.noofmin = this.timeConvert(min)

    Object.assign(this.UserValues, { totalmin: min, language: language });
    sessionStorage.setItem('Uservalue', JSON.stringify(this.UserValues));

  }

  timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour  " + rminutes + " minutes.";
  }

  send() {

    alert("Are you sure want to start Exam?")
    this.router.navigate(['/CALPIFQuestions']);

  }

}
