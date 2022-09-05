import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let navItem = document.getElementById("nav-bar");
    if (navItem?.className === "nav-bar") {
      navItem.className += " menu";
    } else {
      navItem!.className = "nav-bar";
    }
  }

}
