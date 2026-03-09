import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/classfiles/user';
import { CalpifService } from '../shared/services/calpif.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message:any;
  loading = false;
  roleid:any;
  deviceInfo:any = null;
  devicetype:any;
  lat;
  lng;
  ipAddress
  constructor(private router: Router, private service: CalpifService,private deviceService: DeviceDetectorService) { }

  ngOnInit() { 
    localStorage.clear();


    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.devicetype = this.deviceInfo.deviceType;
    console.log(this.devicetype);
    this.service.getPosition().then(pos=>
      {
         this.lat = pos.lng;
         this.lng = pos.lat;
        console.log(this.lat);
        console.log(this.lng);

      });
      this.service.getIPAddress().subscribe((res: any) => {
        this.ipAddress = res.ip;
        console.log(this.ipAddress);
        
      });
  }
 
  Loginuser(values:any) {
    this.loading = true;
    let user = new User();
    user.username = values.UserName;
    user.password = values.Password;
    user.ipnumber = this.ipAddress;
    user.latnum = this.lat;
    user.longnum = this.lng;
    user.devicetype = this.devicetype
    this.service.login(user).subscribe((resp:any) => {
        console.log(resp);
        
        if (resp.Result == "Already Exam Done") {
          this.loading = false;
          this.message = "Exam Already Given!";
        }
        else if (resp.Result == "NotFound") {
          this.loading = false;
          this.message = "User Not Found";
        }
     
      else {
        
        sessionStorage.setItem('Uservalue', JSON.stringify(resp));

        localStorage.setItem('isLoggedin', 'true');
        // localStorage.setItem('role', resp[0].roleid);
        localStorage.setItem('UserId', resp.userid);
        localStorage.setItem('Programid', resp.pgid);
        localStorage.setItem('UserName', JSON.stringify(resp.username));
        localStorage.setItem('FullName', resp.fullname);
          if(resp.pgid == 'P1'){
            this.router.navigate(["/CALPIFDashBoard"]);
            this.loading = false;
          }
          else{
            console.log('StudentDashboard');
            
            this.router.navigate(["/StudentDashboard"]);
            this.loading = false;
          }
         
        
      }


    });

  }
  CertificateSearch(){
    let url = this.router.createUrlTree(['/CertificateSearch'])
    window.open(url.toString(), '_blank')
  }
}