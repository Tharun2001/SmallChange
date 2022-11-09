import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.css']
})
export class HeaderLogoComponent implements OnInit {
  accountLogo!: boolean;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.accountLogo = this.router.url != "/" && this.router.url != "/signup";
    console.log(this.accountLogo);
  }
}
