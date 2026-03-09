import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/classfiles/user';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-startuserexam',
  templateUrl: './startuserexam.component.html',
  styleUrls: ['./startuserexam.component.scss']
})
export class StartuserexamComponent implements OnInit {
  userid;
  loading = true;
  Nodata;
  programid;
  UserValues;
  coursename;
  examcount;
  prevgrade;
  prevlanguage;
  courselist;
  examarr = [
    { name: "STD 5 - Baseline 2025-26", totmarks: 32 },
    { name: "STD 6 - Baseline 2025-26", totmarks: 32 },
    { name: "STD 7 - Baseline 2025-26", totmarks: 32 },
    { name: "STD 8 - Baseline 2025-26", totmarks: 32 },
    { name: "STD 9 - Baseline 2025-26", totmarks: 32 },
    { name: "STD 10 - Baseline 2025-26", totmarks: 32 },
    { name: "STD 11 - Baseline 2025-26", totmarks: 32 },
    { name: "STD 12 - Baseline 2025-26", totmarks: 32 },
    { name: "STD 12 - Baseline 2025-26 (Old)", totmarks: 32 },
    { name: "STD 9 - Gujarati - Baseline 2025-26", totmarks: 32 },
    { name: "STD 10 - Gujarati - Baseline 2025-26", totmarks: 32 },
    { name: "STD 11 - Gujarati - Baseline 2025-26", totmarks: 32 },
    { name: "STD 12 - Gujarati - Baseline 2025-26", totmarks: 32 },

    { name: "STD 5 - Endline 2025-26", totmarks: 32 },
    { name: "STD 6 - Endline 2025-26", totmarks: 32 },
    { name: "STD 7 - Endline 2025-26", totmarks: 32 },
    { name: "STD 8 - Endline 2025-26", totmarks: 32 },
    { name: "STD 9 - Endline 2025-26", totmarks: 32 },
    { name: "STD 10 - Endline 2025-26", totmarks: 32 },
    { name: "STD 11 - Endline 2025-26", totmarks: 32 },
    { name: "STD 12 - Endline 2025-26", totmarks: 32 },
    { name: "STD 12 - Endline 2025-26 (Old)", totmarks: 32 },
    { name: "STD 9 - Gujarati - Endline 2025-26", totmarks: 32 },
    { name: "STD 10 - Gujarati - Endline 2025-26", totmarks: 32 },
    { name: "STD 11 - Gujarati - Endline 2025-26", totmarks: 32 },
    { name: "STD 12 - Gujarati - Endline 2025-26", totmarks: 32 },

    // kerala
    { name: "STD 1 - Kerala Baseline 2025-26", totmarks: 32 },
    { name: "STD 2 - Kerala Baseline 2025-26", totmarks: 32 },
    { name: "STD 3 - Kerala Baseline 2025-26", totmarks: 32 },
    { name: "STD 4 - Kerala Baseline 2025-26", totmarks: 32 },
    { name: "STD 5 - Kerala Baseline 2025-26", totmarks: 32 },
    { name: "STD 6 - Kerala Baseline 2025-26", totmarks: 32 },
    { name: "STD 7 - Kerala Baseline 2025-26", totmarks: 32 },
    //

    { name: "App Development (Baseline)", totmarks: 24 },
    { name: "Software Development (Baseline)", totmarks: 24 },
    { name: "Webpage Development L-2 (Baseline)", totmarks: 24 },
    { name: "Webpage Development L-1 (Baseline)", totmarks: 24 },
    { name: "App Development (Endline)", totmarks: 24 },
    { name: "Software Development (Endline)", totmarks: 24 },
    { name: "Webpage Development L-2 (Endline)", totmarks: 24 },
    { name: "Webpage Development L-1 (Endline)", totmarks: 24 },
    { name: "STD 5 - Midline 2025-26", totmarks: 32 },
    { name: "STD 6 - Midline 2025-26", totmarks: 32 },
    { name: "STD 7 - Midline 2025-26", totmarks: 32 },
    { name: "STD 8 - Midline 2025-26", totmarks: 32 },
    { name: "STD 9 - Midline 2025-26", totmarks: 32 },
    { name: "STD 11 - Midline 2025-26", totmarks: 32 },
    { name: "STD 9 - Gujarati - Midline 2025-26", totmarks: 32 },
    { name: "STD 11 - Gujarati - Midline 2025-26", totmarks: 32 }
  ];
  FinalGrade;
  username;
  course1examcount;
  course1prevgrade;
  course1name;
  course1language;
  course1grade;
  course2examcount;
  course2prevgrade;
  course2name;
  course2language;
  course2grade;
  standard;
  fullname;

  constructor(private service: CalpifService, private router: Router) {

    this.userid = localStorage.getItem('UserId');
    this.programid = localStorage.getItem('Programid');

    this.UserValues = JSON.parse(sessionStorage.getItem('Uservalue'));

    this.fullname = this.UserValues.fullname;
    this.coursename = this.UserValues.coursename;
    this.examcount = this.UserValues.examcount;
    this.prevgrade = this.UserValues.prevgrade;
    this.prevlanguage = this.UserValues.prevlanguage;
    this.username = this.UserValues.username;

    this.loading = false;
    var splitted = this.coursename.split(" ", 2);
    this.standard = splitted[1]
    if (this.coursename == 'Artificial Intelligence') {

      this.courselist = [
        { name: "Introduction to Artificial Intelligence", totmarks: 20 },
        { name: "Introduction to Generative Artificial Intelligence", totmarks: 20 },
      ]

      let userc1 = new User();
      userc1.username = this.username;

      userc1.coursename = "Introduction to Artificial Intelligence";
      this.service.StaticData(userc1).subscribe((data: any) => {

        this.course1examcount = data.examcount;
        this.course1prevgrade = data.prevgrade;
        this.course1name = userc1.coursename;
        this.course1language = data.prevlanguage;
        var totalmarks = this.examarr.find(x => x.name == userc1.coursename);

        var percentage = this.course1prevgrade / 20 * 100;

        this.course1grade = this.Grade(percentage);
        localStorage.setItem('TotalMarks', totalmarks.totmarks.toString());
        Object.assign(this.UserValues, { totalmarks: totalmarks.totmarks });
        sessionStorage.setItem('Uservalue', JSON.stringify(this.UserValues));

      })

      let userc2 = new User();
      userc2.username = this.username;
      userc2.coursename = "Introduction to Generative Artificial Intelligence";
      this.service.StaticData(userc2).subscribe((data: any) => {

        this.course2examcount = data.examcount;
        this.course2prevgrade = data.prevgrade;
        this.course2name = userc2.coursename;
        this.course2language = data.prevlanguage;
        var totalmarks = this.examarr.find(x => x.name == userc2.coursename);
        var percentage = this.course2prevgrade / 20 * 100;
        this.course2grade = this.Grade(percentage);

        localStorage.setItem('TotalMarks', totalmarks.totmarks.toString());
        Object.assign(this.UserValues, { totalmarks: totalmarks.totmarks });
        sessionStorage.setItem('Uservalue', JSON.stringify(this.UserValues));
      })
    }
    else if (this.coursename == 'STD 1 - Baseline 2023-24' || this.coursename == 'STD 2 - Baseline 2023-24' || this.coursename == 'STD 3 - Baseline 2023-24' || this.coursename == 'STD 4 - Baseline 2023-24') {

      this.courselist = [
        { name: "STD " + this.standard + " - Language Baseline 2023-24", totmarks: 16 },
        { name: "STD " + this.standard + " - Maths Baseline 2023-24", totmarks: 16 },
      ]


      let userc1 = new User();
      userc1.username = this.username;

      userc1.coursename = "STD " + this.standard + " - Language Baseline 2023-24";
      this.service.StaticData(userc1).subscribe((data: any) => {

        this.course1examcount = data.examcount;
        this.course1prevgrade = data.prevgrade;
        this.course1name = userc1.coursename;
        this.course1language = data.prevlanguage;
        var totalmarks = this.examarr.find(x => x.name == userc1.coursename);

        localStorage.setItem('TotalMarks', totalmarks.totmarks.toString());
        Object.assign(this.UserValues, { totalmarks: totalmarks.totmarks });
        sessionStorage.setItem('Uservalue', JSON.stringify(this.UserValues));
        var percentage = data.prevgrade / totalmarks.totmarks * 100;
        this.course1grade = this.Grade(percentage);

      })
      let userc2 = new User();
      userc2.username = this.username;
      userc2.coursename = "STD " + this.standard + " - Maths Baseline 2023-24";
      this.service.StaticData(userc2).subscribe((data: any) => {

        this.course2examcount = data.examcount;
        this.course2prevgrade = data.prevgrade;
        this.course2name = userc2.coursename;
        this.course2language = data.prevlanguage;
        var totalmarks = this.examarr.find(x => x.name == userc2.coursename);
        localStorage.setItem('TotalMarks', totalmarks.totmarks.toString());
        Object.assign(this.UserValues, { totalmarks: totalmarks.totmarks });
        sessionStorage.setItem('Uservalue', JSON.stringify(this.UserValues));
        var percentage = data.prevgrade / totalmarks.totmarks * 100;
        this.course2grade = this.Grade(percentage);

      })
    }
    else {
      var totalmarks = this.examarr.find(x => x.name == this.coursename);
      localStorage.setItem('TotalMarks', totalmarks.totmarks.toString());
      Object.assign(this.UserValues, { totalmarks: totalmarks.totmarks });
      sessionStorage.setItem('Uservalue', JSON.stringify(this.UserValues));
      if (this.prevgrade != 0) {
        var percentage = this.prevgrade / totalmarks.totmarks * 100

        if (this.coursename == 'STD 1 - Kerala Baseline 2025-26' || this.coursename == 'STD 2 - Kerala Baseline 2025-26' || this.coursename == 'STD 3 - Kerala Baseline 2025-26' || this.coursename == 'STD 4 - Kerala Baseline 2025-26' || this.coursename == 'STD 5 - Kerala Baseline 2025-26' || this.coursename == 'STD 6 - Kerala Baseline 2025-26' || this.coursename == 'STD 7 - Kerala Baseline 2025-26' || this.coursename == 'App Development (Endline)' || this.coursename == 'Software Development (Endline)' || this.coursename == 'Webpage Development L-2 (Endline)' || this.coursename == 'Webpage Development L-1 (Endline)' || this.coursename == 'App Development (Baseline)' || this.coursename == 'Software Development (Baseline)' || this.coursename == 'Webpage Development L-2 (Baseline)' || this.coursename == 'Webpage Development L-1 (Baseline)' || this.coursename == 'STD 5 - Baseline 2025-26' || this.coursename == 'STD 6 - Baseline 2025-26' || this.coursename == 'STD 7 - Baseline 2025-26' || this.coursename == 'STD 8 - Baseline 2025-26' || this.coursename == 'STD 9 - Baseline 2025-26' || this.coursename == 'STD 10 - Baseline 2025-26' || this.coursename == 'STD 11 - Baseline 2025-26' || this.coursename == 'STD 12 - Baseline 2025-26' || this.coursename == 'STD 9 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 10 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 11 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 12 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 5 - Midline 2025-26' || this.coursename == 'STD 6 - Midline 2025-26' || this.coursename == 'STD 7 - Midline 2025-26' || this.coursename == 'STD 8 - Midline 2025-26' || this.coursename == 'STD 9 - Midline 2025-26' || this.coursename == 'STD 11 - Midline 2025-26' || this.coursename == 'STD 9 - Gujarati - Midline 2025-26' || this.coursename == 'STD 11 - Gujarati - Midline 2025-26' || this.coursename == 'STD 5 - Endline 2025-26' || this.coursename == 'STD 6 - Endline 2025-26' || this.coursename == 'STD 7 - Endline 2025-26' || this.coursename == 'STD 8 - Endline 2025-26' || this.coursename == 'STD 9 - Endline 2025-26' || this.coursename == 'STD 10 - Endline 2025-26' || this.coursename == 'STD 11 - Endline 2025-26' || this.coursename == 'STD 12 - Endline 2025-26' || this.coursename == 'STD 9 - Gujarati - Endline 2025-26' || this.coursename == 'STD 10 - Gujarati - Endline 2025-26' || this.coursename == 'STD 11 - Gujarati - Endline 2025-26' || this.coursename == 'STD 12 - Gujarati - Endline 2025-26') {
          if (percentage >= 61 && percentage <= 100) {
            this.FinalGrade = "A";
          }
          if (percentage >= 41 && percentage < 61) {
            this.FinalGrade = "B";
          }
          if (percentage >= 26 && percentage < 41) {
            this.FinalGrade = "C";
          }
          if (percentage >= 1 && percentage < 26) {
            this.FinalGrade = "D";
          }
          if (percentage == 0) {
            this.FinalGrade = "E";
          }
        }
        else {
          if (percentage >= 76 && percentage <= 100) {
            this.FinalGrade = "A";
          }
          if (percentage >= 51 && percentage < 76) {
            this.FinalGrade = "B";
          }
          if (percentage >= 35 && percentage < 51) {
            this.FinalGrade = "C";
          }
          if (percentage >= 21 && percentage < 35) {
            this.FinalGrade = "D";
          }
          if (percentage >= 0 && percentage < 21) {
            this.FinalGrade = "E";
          }
        }
      }
    }


  }
  ngOnInit() {

  }

  Grade(percentage) {

    if (this.coursename == 'STD 1 - Kerala Baseline 2025-26' || this.coursename == 'STD 2 - Kerala Baseline 2025-26' || this.coursename == 'STD 3 - Kerala Baseline 2025-26' || this.coursename == 'STD 4 - Kerala Baseline 2025-26' || this.coursename == 'STD 5 - Kerala Baseline 2025-26' || this.coursename == 'STD 6 - Kerala Baseline 2025-26' || this.coursename == 'STD 7 - Kerala Baseline 2025-26' || this.coursename == 'STD 5 - Baseline 2025-26' || this.coursename == 'STD 6 - Baseline 2025-26' || this.coursename == 'STD 7 - Baseline 2025-26' || this.coursename == 'STD 8 - Baseline 2025-26' || this.coursename == 'STD 9 - Baseline 2025-26' || this.coursename == 'STD 10 - Baseline 2025-26' || this.coursename == 'STD 11 - Baseline 2025-26' || this.coursename == 'STD 12 - Baseline 2025-26' || this.coursename == 'STD 9 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 10 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 11 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 12 - Gujarati - Baseline 2025-26' || this.coursename == 'App Development (Baseline)' || this.coursename == 'Software Development (Baseline)' || this.coursename == 'Webpage Development L-2 (Baseline)' || this.coursename == 'Webpage Development L-1 (Baseline)' || this.coursename == 'App Development (Endline)' || this.coursename == 'Software Development (Endline)' || this.coursename == 'Webpage Development L-2 (Endline)' || this.coursename == 'Webpage Development L-1 (Endline)' || this.coursename == 'STD 5 - Midline 2025-26' || this.coursename == 'STD 6 - Midline 2025-26' || this.coursename == 'STD 7 - Midline 2025-26' || this.coursename == 'STD 8 - Midline 2025-26' || this.coursename == 'STD 9 - Midline 2025-26' || this.coursename == 'STD 11 - Midline 2025-26' || this.coursename == 'STD 9 - Gujarati - Midline 2025-26' || this.coursename == 'STD 11 - Gujarati - Midline 2025-26' || this.coursename == 'STD 5 - Endline 2025-26' || this.coursename == 'STD 6 - Endline 2025-26' || this.coursename == 'STD 7 - Endline 2025-26' || this.coursename == 'STD 8 - Endline 2025-26' || this.coursename == 'STD 9 - Endline 2025-26' || this.coursename == 'STD 10 - Endline 2025-26' || this.coursename == 'STD 11 - Endline 2025-26' || this.coursename == 'STD 12 - Endline 2025-26' || this.coursename == 'STD 9 - Gujarati - Endline 2025-26' || this.coursename == 'STD 10 - Gujarati - Endline 2025-26' || this.coursename == 'STD 11 - Gujarati - Endline 2025-26' || this.coursename == 'STD 12 - Gujarati - Endline 2025-26') {
      if (percentage >= 61 && percentage <= 100) {
        return "A";
      }
      if (percentage >= 41 && percentage < 61) {
        return "B";
      }
      if (percentage >= 26 && percentage < 41) {
        return "C";
      }
      if (percentage >= 1 && percentage < 26) {
        return "D";
      }
      if (percentage == 0) {
        return "E";
      }
    }
    else {
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
  }

  Start(coursename) {

    sessionStorage.setItem('coursename', JSON.stringify(coursename));
    this.router.navigate(['/CALPIFSelectLanguage']);

  }

  CertificateRedirect(value) {


    let url = this.router.createUrlTree(['/CALPIFCertificate', this.username, value])
    window.open(url.toString(), '_blank')

  }
}