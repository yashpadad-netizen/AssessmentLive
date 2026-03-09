import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssessmentService } from '../shared/services/assessment.service';
import { CalpifService } from '../shared/services/calpif.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-setwisequestionlist',
  templateUrl: './setwisequestionlist.component.html',
  styleUrls: ['./setwisequestionlist.component.scss']
})
export class SetwisequestionlistComponent implements OnInit {
  course;
  loading;
  language;
  setwiseform: FormGroup;
  cname;
  setlist;
  questionlist;
  Course;
  Language;
  setid;
  Level;
  standard;
  set;
  complist;
  setnumber;
  constructor(private service: AssessmentService, private calservice: CalpifService, private fb: FormBuilder,private http:HttpClient) {


    this.calservice.GetAllCourse().subscribe((data: any) => {
      this.course = data;
      this.loading = false;

    });

    // this.calservice.Getemp("where Employee.empid='EMP169'").subscribe((data: any) => {
    //   console.log(data);
      
    // })
    // this.calservice.Getempd("EMP169").subscribe((data: any) => {
    //   console.log(data);
      
    // })
    // this.calservice.GetempH("where Program.pgid='P6'").subscribe((data: any) => {
    //   console.log(data);
      
    // })
  }
  OnSelectCourse(value) {
    
    var splitted = value.split(" ", 2);
    this.standard =  splitted[1]
    this.cname = value;
    

    this.calservice.GetLanguageAll(value).subscribe((data: any) => {
      this.language = data;

    });
  }
  OnSelectLangugae(value) {
    this.calservice.GetSet(this.cname, value).subscribe((data: any) => {
      this.setlist = data;

    });
  
  }
  ngOnInit() {
    this.setwiseform = this.fb.group({
      courses: ['', Validators.required],
      langauge: ['', Validators.required],
      set: ['', Validators.required],
      level: ['', Validators.required]

    })
  }
  filterrecord(setid,Level,lang) {
    console.log(setid);
     var set=  this.setlist.filter(a=> a.setid == setid);
      this.setnumber = set[0].examset
     
    this.calservice.GetQuestionSet(setid,Level).subscribe((data: any) => {
      this.questionlist = data;
    });
  this.calservice.GetCompetencyList(this.cname, Level,lang).subscribe((data: any) => {
    this.complist = data
    });
  }
PDF(div_id) {
  var printHtml = document.getElementById('mydiv').outerHTML;
  var currentPage = document.body.innerHTML;
  var elementPage = '<html><head><title></title></head><body>' + printHtml + '</body>';
  //change the body
  document.body.innerHTML = elementPage;
  //print
  window.print();
  //go back to the original     
  document.body.innerHTML = currentPage;
  }
  OnSelectSet(setlist){
    console.log(setlist);
    
  }
}