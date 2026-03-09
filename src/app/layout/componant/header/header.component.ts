import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  FullName
  constructor(public router: Router) {
    this.FullName = localStorage.getItem('FullName');
   }

   onLoggedout() {
    localStorage.removeItem("timer");

    localStorage.clear();
    sessionStorage.clear();
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
}

  ngOnInit(): void {
  }

}
