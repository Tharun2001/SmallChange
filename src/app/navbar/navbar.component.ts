import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserServiceService, private route: Router) { }

  ngOnInit(): void {

  }

  navBartoggle(){
    var navItem = document.getElementById("nav-bar");
    if (navItem!.className === "nav-bar") {
      navItem!.className += " menu";
    } else {
      navItem!.className = "nav-bar";
    }
  }

  logout() {
    this.userService.logout();
    this.route.navigate(['/']);
  }

}
