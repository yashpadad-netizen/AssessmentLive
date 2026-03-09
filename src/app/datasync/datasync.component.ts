import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../shared/services/assessment.service';
import { CalpifService } from '../shared/services/calpif.service';

@Component({
  selector: 'app-datasync',
  templateUrl: './datasync.component.html',
  styleUrls: ['./datasync.component.scss']
})
export class DatasyncComponent implements OnInit {
  courselist;
  courseundefined;
  loading= false;
  Course
  constructor(private service: CalpifService) {

    this.service.GetCoursename().subscribe((data: any) => {
      
      if(data.length != 0){
        this.courselist=data;
      }
      else{
        this.courselist=null;
      }
    
     
    })
   }

  ngOnInit() {
  }
  DataSync(Course){
    this.loading = true;
    if(Course != undefined){

      this.service.SyncData(Course).subscribe((res: any) => {
        alert(res);
        this.loading = false;

      })

    }
    else{
      this.courseundefined = 'Please Select Course'
      this.loading = false;

    }
  }
}
