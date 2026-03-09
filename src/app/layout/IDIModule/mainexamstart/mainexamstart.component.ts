import { Component, OnInit } from '@angular/core';
import { AssessmentService } from 'src/app/shared/services/assessment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mainexamstart',
  templateUrl: './mainexamstart.component.html',
  styleUrls: ['./mainexamstart.component.scss']
})
export class MainexamstartComponent implements OnInit {
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

  constructor(private router: Router, private service: AssessmentService, private route: ActivatedRoute, private fb: FormBuilder) {

    this.userid = localStorage.getItem('UserId');
    this.UserValues = JSON.parse(sessionStorage.getItem('Uservalue'));
    if (localStorage.getItem('cq') != null) {
      this.router.navigate(['/login'])
    }
    this.course = this.UserValues.coursename;
    this.totalmarks = this.UserValues.totalmarks;
    this.service.GetLanguage(this.course).subscribe((data: any) => {
      this.languagename = data;
      console.log(this.languagename);

      this.loading = false;
    });

  }


  ngOnInit() {
  }
  onchangedpd(language) {


    this.course = this.UserValues.coursename;
    this.totalmarks = this.UserValues.totalmarks;
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
    this.router.navigate(['/StartQuestion']);

  }
}