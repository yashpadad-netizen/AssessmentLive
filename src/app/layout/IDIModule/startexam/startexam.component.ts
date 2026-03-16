import { AssessmentService } from 'src/app/shared/services/assessment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-startexam',
  templateUrl: './startexam.component.html',
  styleUrls: ['./startexam.component.scss']
})
export class StartexamComponent implements OnInit {
  userid;
  loading = true;
  Nodata;
  programid;
  UserValues;
  coursename;
  fullname;
  examcount;
  prevgrade;
  prevlanguage;
  examarr = [
    { name: "STD 1 - Final Exam", totmarks: 26 },
    { name: "STD 2 - Final Exam", totmarks: 28 },
    { name: "STD 3 - Final Exam", totmarks: 28 },
    { name: "STD 4 - Final Exam", totmarks: 28 },
    { name: "STD 5 - Final Exam", totmarks: 16 },
    { name: "STD 6 - Final Exam", totmarks: 22 },
    { name: "STD 7 - Final Exam", totmarks: 20 },
    { name: "STD 8 - Final Exam", totmarks: 26 },
    { name: "STD 9 - Final Exam", totmarks: 24 },
    { name: "STD 10 - Final Exam", totmarks: 24 },
    { name: "STD 11 - Final Exam", totmarks: 24 },
    { name: "STD 12 - Final Exam", totmarks: 24 },
    { name: "STD 1 - FC Beginner Exam", totmarks: 10 },
    { name: "STD 2 - FC Beginner Exam", totmarks: 10 },
    { name: "STD 3 - FC Beginner Exam", totmarks: 6 },
    { name: "STD 4 - FC Beginner Exam", totmarks: 8 },
    { name: "STD 5 - FC Beginner Exam", totmarks: 6 },
    { name: "Digital Sakshar Online Exam", totmarks: 50 },
    { name: "STD 6 - ATL", totmarks: 40 },
    { name: "STD 7 - ATL", totmarks: 40 },
    { name: "STD 8 - ATL", totmarks: 40 },
    { name: "STD 9 - ATL", totmarks: 40 },
    { name: "STD 10 - ATL", totmarks: 40 },
    { name: "STD 12 - ATL", totmarks: 40 },
    { name: "STD 11 - ATL", totmarks: 40 },
    { name: "Foundation Course Exam", totmarks: 40 },
    { name: "Primary Fun With English", totmarks: 10 },
    { name: "Secondary Computer Science", totmarks: 10 },
    { name: "Digital Skill For Parents", totmarks: 10 },
    { name: "Soft Skill", totmarks: 10 },
    { name: "Digital Skill Enhancement", totmarks: 10 },
    { name: "Digital Literacy for Employment", totmarks: 50 },
    { name: "Financial Literacy Skills", totmarks: 50 },
    { name: "STD 5 - Baseline", totmarks: 12 },
    { name: "Digital Skill - Youth", totmarks: 10 },
    { name: "Digital Skill - Youth Pre-Test", totmarks: 10 },
    { name: "Digital Skill - Youth Post-Test", totmarks: 10 },
    { name: "STD 6 - ATL 2022-23", totmarks: 30 },
    { name: "STD 7 - ATL 2022-23", totmarks: 30 },
    { name: "STD 8 - ATL 2022-23", totmarks: 30 },
    { name: "STD 9 - ATL 2022-23", totmarks: 30 },
    { name: "STD 10 - ATL 2022-23", totmarks: 30 },
    { name: "Digital and Financial Literacy (Women)", totmarks: 20 },
    { name: "Digital and Financial Literacy (Women) - Baseline", totmarks: 50 },
    { name: "Digital Literacy (Adolescent)", totmarks: 50 },
    { name: "Digital Literacy (Adolescent) - Baseline", totmarks: 50 },
    { name: "Digital and 21st Century Skills (Youth)", totmarks: 50 },
    { name: "Digital and 21st Century Skills (Youth) - Baseline", totmarks: 50 },
    { name: "Digital Literacy for Employment 2022-23", totmarks: 50 },
    { name: "Digital Literacy for Employment IBM", totmarks: 50 },
    { name: "Digital and Financial Literacy (Women Entrepreneur) - Baseline", totmarks: 50 },
    { name: "STD 6 - ATL Midline 2022-23", totmarks: 24 },
    { name: "STD 7 - ATL Midline 2022-23", totmarks: 24 },
    { name: "STD 8 - ATL Midline 2022-23", totmarks: 24 },
    { name: "STD 9 - ATL Midline 2022-23", totmarks: 24 },
    { name: "STD 10 - ATL Midline 2022-23", totmarks: 22 },
    { name: "Digital Literacy (Adolescent) - Endline", totmarks: 50 },
    { name: "Digital and 21st Century Skills (Youth) - Endline", totmarks: 50 },
    { name: "Digital and Financial Literacy (Women) - Endline", totmarks: 50 },
    { name: "Digital and Financial Literacy (Women Entrepreneur) - Endline", totmarks: 50 },
    { name: "Digital Literacy and Employment Readiness - Final Exam", totmarks: 25 },
    { name: "Digital Literacy for Employment Spoke", totmarks: 20 },
    { name: "Career Awareness" },
    { name: "Happiness Literacy Standard 5 to 7", totmarks: 12 },
    { name: "Happiness Literacy Standard 8 and Above", totmarks: 15 },

    // PRE-placement IDI
    { name: "Pre-Placement Guidance Session (Pre-Test) 2025-26", totmarks: 10 },
    { name: "Pre-Placement Guidance Session (Post-Test) 2025-26", totmarks: 10 },
    { name: "Pre-Placement Guidance Session (Feedback) 2025-26", totmarks: 11 },

    // teacher training mye-School
    { name: "Teacher Training (Pre) 2025-26", totmarks: 15 },
    { name: "Teacher Training (Post) 2025-26", totmarks: 15 },
    { name: "Teacher Training (Feedback) 2025-26", totmarks: 11 },

    //happiness teacher 
    { name: "Happiness Teacher Feedback", totmarks: 8 },

  ];
  FinalGrade;
  username
  constructor(private service: AssessmentService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {

    this.userid = localStorage.getItem('UserId');
    this.programid = localStorage.getItem('Programid');

    this.UserValues = JSON.parse(sessionStorage.getItem('Uservalue'));
    this.fullname = this.UserValues.fullname;
    this.coursename = this.UserValues.coursename;
    this.examcount = this.UserValues.examcount;
    this.prevgrade = this.UserValues.prevgrade;
    this.prevlanguage = this.UserValues.prevlanguage;
    this.username = this.UserValues.username

    this.loading = false;
    var totalmarks = this.examarr.find(x => x.name == this.coursename);
    Object.assign(this.UserValues, { totalmarks: totalmarks.totmarks });
    sessionStorage.setItem('Uservalue', JSON.stringify(this.UserValues));
    if (this.prevgrade != 0) {
      var percentage = this.prevgrade / totalmarks.totmarks * 100
      if (percentage >= 76 && percentage <= 100) {
        this.FinalGrade = "A"
      }
      if (percentage >= 51 && percentage < 76) {
        this.FinalGrade = "B"
      }
      if (percentage >= 35 && percentage < 51) {
        this.FinalGrade = "C"
      }
      if (percentage >= 21 && percentage < 35) {
        this.FinalGrade = "D"
      }
      if (percentage >= 0 && percentage < 21) {
        this.FinalGrade = "E"
      }
    }
  }
  ngOnInit() {

  }
  Start() {
    if (this.coursename == 'Career Awareness') {
      this.router.navigate(['/CareerAwarenessExam']);
    }
    else if (this.coursename == 'Pre-Placement Guidance Session (Feedback) 2025-26') {
      this.router.navigate(['/PrePlacementFeedback']);
    }
    else if (this.coursename == 'Teacher Training (Feedback) 2025-26') {
      this.router.navigate(['/TeacherTrainingFeedback']);
    }
    else if (this.coursename == 'Happiness Teacher Feedback') {
      this.router.navigate(['/HappinessTeacherFeedback']);
    }
    else {
      this.router.navigate(['/MainStartQuestion']);
    }
  }
  CertificateRedirect() {
    if (this.coursename == 'Digital and Financial Literacy (Women Entrepreneur) - Baseline' || this.coursename == 'Digital and 21st Century Skills (Youth) - Baseline' || this.coursename == 'Digital Literacy (Adolescent) - Baseline' || this.coursename == 'Digital and Financial Literacy (Women) - Baseline' || this.coursename == 'Digital and 21st Century Skills (Youth)' || this.coursename == 'Digital Literacy (Adolescent)' || this.coursename == 'Digital and Financial Literacy (Women)' || this.coursename == 'Employability Skills' || this.coursename == 'Financial Literacy Skills') {
      let url = this.router.createUrlTree(['/IDICertificate', this.username, this.coursename])
      window.open(url.toString(), '_blank')
    }
    else {
      let url = this.router.createUrlTree(['/CALPIFCertificate', this.username, this.coursename])
      window.open(url.toString(), '_blank')
    }
  }
}