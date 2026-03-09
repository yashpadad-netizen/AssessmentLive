import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User } from '../classfiles/user';
import { LevelwiseQuestion } from '../classfiles/levelwiseQuestions';
import { Observable, BehaviorSubject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    var headers = new HttpHeaders({ "Content-Type": "application/json" })
    return this.http.post(environment.apiUrl + "Assessment/" + "Login", JSON.stringify(user), { headers: headers })
  }

  InsertUserMaster(data: any) {
    return this.http.post(environment.apiUrl + "Assessment/" + "InsertUserMaster/", data);
  }
  InsertCourse(course: any) {

    return this.http.post(environment.apiUrl + "Assessment/" + "InsertCourse", course);
  }
  GetCourseList(where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetCourseList?whr=" + where)
  }
  RemoveProgram(pgid: string) {
    return this.http.get(environment.apiUrl + "JankariPortal/" + "RemoveProgram/" + pgid)
  }
  UpdateCourse(courseid: string, data: any) {
    return this.http.post(environment.apiUrl + "Assessment/" + "UpdateCourse/" + courseid, data);
  }
  FillDropDown(column1: any, column2: any, tablename: any, where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "FillDropDown?column1=" + column1 + "&column2=" + column2 + "&tablename=" + tablename + "&whr=" + where)
  }
  FillDropDownj(tablename: any, column1: any, column2: any, where: any) {
    return this.http.get(environment.apiUrl1 + 'JankariPortal/' + 'FillDropDown?tablename=' + tablename + '&column1=' + btoa(column1) + '&column2=' + btoa(column2) + '&whr=' + btoa(where));
  }
  InsertCompetency(data: any) {
    return this.http.post(environment.apiUrl + "Assessment/" + "InsertCompetency/", data);
  }

  GetCompetencyList(where: any) {

    return this.http.get(environment.apiUrl + "Assessment/" + "GetCompetencyList?whr=" + where)
  }

  InsertQuestion(data: any) {
    return this.http.post(environment.apiUrl + "Assessment/" + "InsertQuestion/", data);
  }
  InsertExam(data: any) {
    return this.http.post(environment.apiUrl + "Assessment/" + "InsertExam/", data);
  }

  GetQuestionMasterList(where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetQuestionMasterList?whr=" + where)
  }






  GetName(table: string, col: string, where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetName?table=" + table + "&col=" + col + "&whr=" + where)
  }
  GetNamejankari(table: string, col: string, where: any) {
    return this.http.get(environment.apiUrl1 + "JankariPortal/" + "GetName?table=" + table + "&col=" + btoa(col) + "&whr=" + btoa(where))
  }
  AddExamDetail(data: any) {
    return this.http.post(environment.apiUrl + "Assessment/" + "AddExamDetail/", data);
  }

  GetExamDetailList(examid: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamDetailList/" + examid)
  }

  GetUserMasterList(where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetUserMasterList?whr=" + where)
  }

  GetExam(examid: any, euserid: any, UserId: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExam/" + examid + "/" + euserid + "/" + UserId)
  }
  GetExamList(where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamList?whr=" + where)
  }

  GetExamMasterDetail(examid: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamMasterDetail/" + examid)
  }
  GetExamUserSliderList(userid: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamUserSliderList/" + userid)
  }

  GetExamMaster(courseid: string, language: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamMaster/" + courseid + "/" + language)
  }

  AddExamResult(userid: string, examid: any, euserid: any, data: any) {

    return this.http.post(environment.apiUrl + "Assessment/" + "AddExamResult/" + userid + "/" + examid + "/" + euserid, data);
  }
  AddCalExamResult(userid: string, examid: any, euserid: any, data: any) {

    return this.http.post(environment.apiUrl + "Assessment/" + "AddCalExamResult/" + userid + "/" + examid + "/" + euserid, data);
  }
  AddExamData(userid: string, examid: any, euserid: any, data: any) {

    return this.http.post(environment.apiUrl + "Assessment/" + "AddExamData/" + userid + "/" + examid + "/" + euserid, data);
  }
  UploadExamUser(examid: string, userid: string, data: any) {
    return this.http.post(environment.apiUrl + "Assessment/" + "UploadExamUser/" + examid + "/" + userid, data);
  }
  InsertExamUser(user: any) {

    return this.http.post(environment.apiUrl + "Assessment/" + "InsertExamUser", user);
  }
  GetExamResult(userid: string, examid: any) {

    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamResult/" + userid + "/" + examid);
  }
  GetExamCertificateList(where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamCertificateList?whr=" + where)
  }
  GetExamUserDetailsList(where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamUserDetailsList?whr=" + where)
  }
  GetCalExamUserDetailsList(where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetCalExamUserDetailsList?whr=" + where)
  }
  RemoveCourseMaster(courseid: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "RemoveCourseMaster/" + courseid)
  }
  GetMarks(userid: string, examid: any, euserid: any) {

    return this.http.get(environment.apiUrl + "Assessment/" + "GetMarks/" + userid + "/" + examid + "/" + euserid);
  }
  GetExamReport(userid: string, examid: any, euserid: any) {

    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamReport/" + userid + "/" + examid + "/" + euserid);
  }
  GetExamSummary(euserid: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamSummary/" + euserid)
  }
  GetProfile(userid: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetProfile/" + userid)
  }
  UpdatePassword(user: any) {

    return this.http.post(environment.apiUrl + "Assessment/" + "UpdatePassword", user);
  }
  GetUserDashboardCount(userid: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetUserDashboardCount/" + userid)
  }
  CheckExamUser(userid: string, examid: any, courseid: any) {

    return this.http.get(environment.apiUrl + "Assessment/" + "CheckExamUser/" + userid + "/" + examid + "/" + courseid);
  }
  GetUserCourseList(where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetUserCourseList?whr=" + where)
  }
  GetExamUserList(where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamUserList?whr=" + where)
  }
  GetRptCompentencyMarksUser(where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetRptCompentencyMarksUser?whr=" + where)
  }
  AddIDIAssessmentEvalution(dependancyid: string, data: any) {
    return this.http.post(environment.apiUrl1 + "Center/" + "AddIDIAssessmentEvalution/" + dependancyid, data);
  }
  AddFeedbackData(data: any) {

    return this.http.post(environment.apiUrl + "Assessment/" + "AddFeedbackData", data);
  }
  GetFeedbackData(studentid: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetFeedbackData/" + studentid)
  }
  AddDigitalSaksharFeedback(data: any) {
    return this.http.post(environment.apiUrl + "Assessment/" + "AddDigitalSaksharFeedback", data);
  }
  GetExamFeedbacknotgivenList(where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExamFeedbacknotgivenList?whr=" + where)
  }


  // CAL API
  GetCalExamUserSliderList(userid: string, pgid: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetCalExamUserSliderList/" + userid + "/" + pgid)
  }
  GetCalExamList(pgid: string, where: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetCalExamList/" + pgid + "?whr=" + where)
  }
  GetCompetencywiseQuestionList(where: any) {

    return this.http.get(environment.apiUrl + "Assessment/" + "GetCompetencywiseQuestionList?whr=" + where)
  }
  GetLanguage(coursename: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetLanguage/" + coursename)
  }
  GetExamnew(coursename: any, language: any, userid: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetExam/" + coursename + "/" + language + "/" + userid)
  }


  InsertUserExam(coursename: any, language: any, userid: any, setid: any, data: any) {
    return this.http.post(environment.apiUrl + "Assessment/" + "InsertUserExam/" + coursename + "/" + language + "/" + userid + "/" + setid, data);
  }
  GetCertificate(userid: string, coursename: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetCertificate/" + userid + "/" + coursename)
  }
  GetCourse(username: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetCourse/" + username)
  }
  GetCoursename() {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetCoursename")
  }
  SyncData(coursename: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "SyncData/" + coursename)
  }
  GetAllCourse() {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetAllCourse")
  }
  public getQuestions(): Observable<LevelwiseQuestion[]> {
    return this.http.get<LevelwiseQuestion[]>('assets/Data.json');
  }
  GetLanguageAll(coursename: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetLanguageAll/" + coursename)
  }
  InsertFeedBack(data: any) {
    return this.http.post(environment.apiUrl1 + 'Employee/' + 'InsertFeedBack', data);
  }
  CheckStudentFeedback(studentid: string) {
    return this.http.get(environment.apiUrl + "Assessment/" + "CheckStudentFeedback/" + studentid)
  }
  GetReExam(coursename: any, language: any, userid: any, setid: any) {
    return this.http.get(environment.apiUrl + "Assessment/" + "GetReExam/" + coursename + "/" + language + "/" + userid + "/" + setid)
  }
  StaticData(user: User) {
    var headers = new HttpHeaders({ "Content-Type": "application/json" })
    return this.http.post(environment.apiUrl + "Assessment/" + "StaticData", JSON.stringify(user), { headers: headers })
  }

}
