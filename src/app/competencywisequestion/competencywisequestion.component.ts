import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../shared/services/assessment.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { CalpifService } from '../shared/services/calpif.service';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-competencywisequestion',
  templateUrl: './competencywisequestion.component.html',
  styleUrls: ['./competencywisequestion.component.scss']
})
export class CompetencywisequestionComponent implements OnInit {
  language;
  course;
  CompetencyWiseQuestionsList;
  p = 1;
  array = [];
  StrWhere = "";
  loading = true;
  CompetencyWiseQuestionscount= 0;
  audio;
  btn = [];
  Course;
  Language;
  loaded
  constructor(private service : AssessmentService,private calservice : CalpifService) {

   
    this.calservice.GetAllCourse().subscribe((data: any) => {
      this.course = data;
      this.loading = false;
      
     });
  
    
   }
   OnSelectCourse(value){
    this.calservice.GetLanguageAll(value).subscribe((data: any) => {
      this.language = data;

     });
   }
  ngOnInit() {
  }
 
  filterrecord(Course, Language) {
    
    this.loading = true;

    this.array = [];
    var where = "";
    this.StrWhere = "";

    if (Course != null && Course != "" && Course != "undefined" && Course != "Select") {
  
      this.array.push("CourseMaster.coursename='" + Course + "'");

    }
    if (Language != null && Language != "" && Language != "undefined" && Language != "Select") {
    
      this.array.push("CompetencyMaster.language='" + Language + "'");
    }
   


    if (this.array.length == 0) {
      where = this.StrWhere;
    }
    else if (this.array.length == 1) {
      this.StrWhere = " where " + this.array[0].toString();
    }
    else {
      this.StrWhere = " where " + this.array[0].toString();
      for (let i = 1; i < this.array.length; i++) {
        this.StrWhere = this.StrWhere + " and " + this.array[i].toString();
      }


    }
    where = this.StrWhere;
  
    this.calservice.GetCompetencywiseQuestionList(where).subscribe((data: any) => {
      this.CompetencyWiseQuestionsList = data;
        // console.log(this.CompetencyWiseQuestionsList)       
      if (data == "") {

        this.CompetencyWiseQuestionscount = 0;
      }
      else if (data == null && data[0] == null) {

        this.CompetencyWiseQuestionscount = 0;
      }
      else {
        this.CompetencyWiseQuestionscount = data[0].tRecordCount;
      } 
      this.loading = false;
    })


    
  }
  Export(){
    const new_list = this.CompetencyWiseQuestionsList.map(function (obj) {
      return {
        Srno:0,
        'Course':obj.coursename,
        'Language': obj.language,
        'Competency': obj.competencyname,
        'Question ID': obj.questionid,
        'Question Text': obj.questiontext,
        'Question': obj.questiontype=='Image'?"https://dsexam.digitalsakshar.com/Image/"+obj.url+"": obj.questiontype=='Audio'?"https://dsexam.digitalsakshar.com/Image/"+obj.url+"":'',
        'Right Answer': obj.rightanswer,
        'Option 1': obj.answertype=='Image'?"https://dsexam.digitalsakshar.com/Image/"+obj.answer1+"":obj.answertype=='Text'?obj.answer1: obj.answer1,
        'Option 2': obj.answertype=='Image'?"https://dsexam.digitalsakshar.com/Image/"+obj.answer2+"":obj.answertype=='Text'?obj.answer2: obj.answer2,
        'Option 3': obj.answertype=='Image'?"https://dsexam.digitalsakshar.com/Image/"+obj.answer3+"":obj.answertype=='Text'?obj.answer3: obj.answer3,
        'Option 4': obj.answertype=='Image'?"https://dsexam.digitalsakshar.com/Image/"+obj.answer4+"":obj.answertype=='Text'?obj.answer4: obj.answer4,
      
       };
    });
    for (let j = 0; j < new_list.length; j++) {
      new_list[j].Srno = j + 1;
    }
    this.loading = false;
    this.exportAsExcelFile(new_list, 'Competency Wise Questions');
  }
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName  + EXCEL_EXTENSION);
  }
 
}
