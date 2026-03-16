import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-happinessregistrationform',
  templateUrl: './happinessregistrationform.component.html',
  styleUrls: ['./happinessregistrationform.component.scss']
})
export class HappinessregistrationformComponent {
  teacherForm: FormGroup;
  isSubmitting = false;

  state;
  city;
  district;
  school;

  constructor(private fb: FormBuilder, private service: CalpifService, private router: Router) { }

  ngOnInit(): void {
    this.teacherForm = this.fb.group({
      teachername: ['', Validators.required],
      mobileno: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],

      schoolname: ['', Validators.required],
      udiseno: ['', Validators.required],
      standard: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],

      teacherdesignation: ['', Validators.required],
    });

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct state', 'state', '').subscribe((res: any) => {
      this.state = res;
    });
    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct district', 'district', '').subscribe((res: any) => {
      this.district = res;
    });
    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct city', 'city', '').subscribe((res: any) => {
      this.city = res;
    });
    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct schoolname', 'schoolid ', '').subscribe((res: any) => {
      this.school = res;
    });
  }

  onStateChange(stateValue) {
    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct district', 'district', "where state='" + stateValue + "'").subscribe((res: any) => {
      this.district = res;
    });
    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct city', 'city', "where state='" + stateValue + "'").subscribe((res: any) => {
      this.city = res;
    });
    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct schoolname', 'schoolid ', "where state='" + stateValue + "'").subscribe((res: any) => {
      this.school = res;
    });
  }

  onDistrictChange(districtValue) {
    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct city', 'city', "where district='" + districtValue + "'").subscribe((res: any) => {
      this.city = res;
    });
    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct schoolname', 'schoolid ', "where district='" + districtValue + "'").subscribe((res: any) => {
      this.school = res;
    });
  }

  onCityChange(cityValue) {
    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct schoolname', 'schoolid ', "where city='" + cityValue + "'").subscribe((res: any) => {
      this.school = res;
    });
  }

  onSchoolChange(schoolValue) {
    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct udiseno', 'udiseno', "where schoolid='" + schoolValue + "'").subscribe((res: any) => {      
      this.teacherForm.patchValue({ udiseno: res[0].column1 });
    });
  }

  submitForm() {

    if (this.teacherForm.valid) {
      this.isSubmitting = true;

      this.service.TeacherRegistrationHappiness(this.teacherForm.value).subscribe(
        (res) => {
          if (res == 'Teacher registered successfully') {
            this.isSubmitting = false;
            alert('Teacher Registered Successfully');
            this.teacherForm.reset();
            this.router.navigate(["/login"]);
          }
          else {
            alert('Registration failed');
          }
        });
    }
  }

  get f() {
    return this.teacherForm.controls;
  }
}
