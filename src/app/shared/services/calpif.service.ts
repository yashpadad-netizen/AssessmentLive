import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../classfiles/user';

@Injectable({
  providedIn: 'root'
})
export class CalpifService {

  constructor(private http: HttpClient) { }
  GetLanguage(coursename: string) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetLanguage/" + coursename)
  }
  GetExam(coursename: any, language: any, userid: any) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetExam/" + coursename + "/" + language + "/" + userid)
  }
  InsertUserExam(coursename: any, language: any, userid: any, setid: any, data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "InsertUserExam/" + coursename + "/" + language + "/" + userid + "/" + setid, data);
  }
  GetCertificate(username: string, coursename: string) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetCertificate/" + username + "/" + coursename)
  }
  GetReExam(coursename: any, language: any, userid: any, setid: any) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetReExam/" + coursename + "/" + language + "/" + userid + "/" + setid)
  }
  GetName(table: string, col: string, where: any) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetName?table=" + table + "&col=" + col + "&whr=" + where)
  }

  login(user: User) {
    var headers = new HttpHeaders({ "Content-Type": "application/json" })
    return this.http.post(environment.apiUrl + "DSAssessment/" + "Login", JSON.stringify(user), { headers: headers })
  }
  GetCourse(username: string) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetCourse/" + username)
  }

  InsertCareerAwareness(userid: any, data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "InsertCareerAwareness/" + userid, data);
  }
  GetCompetencywiseQuestionList(where: any) {

    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetCompetencywiseQuestionList?whr=" + where)
  }
  StaticData(user: User) {
    var headers = new HttpHeaders({ "Content-Type": "application/json" })
    return this.http.post(environment.apiUrl + "DSAssessment/" + "StaticData", JSON.stringify(user), { headers: headers })
  }
  GetAllCourse() {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetAllCourse")
  }

  GetLanguageAll(coursename: string) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetLanguageAll/" + coursename)
  }
  GetSet(coursename: string, langauge: string) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetSet/" + coursename + "/" + langauge)
  }
  GetCoursename() {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetCoursename")
  }
  SyncData(coursename: string) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "SyncData/" + coursename)
  }
  GetQuestionSet(ceid: string, level: string) {

    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetQuestionSet/" + ceid + "/" + level)
  }

  GetCompetencyList(course: string, level: string, lang: string) {

    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetCompetencyList/" + course + "/" + level + "/" + lang)
  }
  GetGrade(userid: string, setid: string) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetGrade/" + userid + "/" + setid)
  }

  Getemp(where: any) {
    return this.http.get("https://test.piferp.org.in/api/TestJankariController/GetEmployeeList?whr=" + where)
  }
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });

  }

  public getIPAddress() {
    return this.http.get('https://api.ipify.org/?format=json');
  }
  // Getempd(empid) {
  //   return this.http.get("https://test.piferp.org.in/api/TestJankariController/GetEmployee?empid="+empid)
  // }
  // GetempH(where) {
  //   return this.http.get("https://test.piferp.org.in/api/TestJankariController/GetHeadCountEmployeeList?whr="+where)
  // }

  GetCourseAttempt(userid: string) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetCourseAttempt/" + userid);
  }

  InsertPrePlacementGuidance(userid: any, data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "InsertPrePlacementGuidance/" + userid, data);
  }
  AddStudentSummerCampAssessment(username: any, data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "AddStudentSummerCampAssessment/" + username, data);
  }
  InsertYouthsSummerCampAssessment(username: any, data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "InsertYouthsSummerCampAssessment/" + username, data);
  }
  InsertTeacherTrainingLMS(username: any, data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "InsertTeacherTrainingLMS/" + username, data);
  }
  AddHappinessAssessment(username: any, data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "AddHappinessAssessment/" + username, data);
  }
  InsertPrePlacementFeedback(username: any, data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "InsertPrePlacementFeedback/" + username, data);
  }
  InsertTeacherTrainingFeedbackLMS(userid: any, data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "InsertTeacherTrainingFeedbackLMS/" + userid, data);
  }

  GetSchoolDetails(udiseno: any) {
    return this.http.get(environment.apiUrl + "DSAssessment/" + "GetSchoolDetails/" + udiseno);
  }
  TeacherRegistration(data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "TeacherRegistration", data);
  }
  TeacherRegistrationHappiness(data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "TeacherRegistrationHappiness", data);
  }
  YouthsRegistration(data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "YouthsRegistration", data);
  }
  InsertHappinessTeacherFeedback(userid: any, data: any) {
    return this.http.post(environment.apiUrl + "DSAssessment/" + "InsertHappinessTeacherFeedback/" + userid, data);
  }
  FillDropDown(tablename, column1, column2, where) {
    return this.http.get(environment.apiUrl + 'DSAssessment/' + 'FillDropDown?tablename=' + tablename + '&column1=' + btoa(column1).replace(/=+$/, '') + '&column2=' + btoa(column2).replace(/=+$/, '') + '&whr=' + btoa(where).replace(/=+$/, ''));
  }

}
