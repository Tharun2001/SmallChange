import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  username: string = '';
  password: string = '';
  forbiddenChars = new RegExp('^[A-Za-z0-9_-]*$');

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    var usernameFeild = document
      .getElementById('username')
      ?.addEventListener('change', (e) => {
        if (this.username.length >= 3 && this.username.length <= 18) {
          if (this.forbiddenChars.test(this.username)) {
            document.getElementById('usernameError')!.style.display = 'none';
            document.getElementById('username')!.style.border =
              'solid 1px black';
          } else {
            document.getElementById('usernameError')!.style.display = 'block';
            document.getElementById('username')!.style.border =
              'solid 3px #DC1616';
          }
        } else {
          document.getElementById('usernameError')!.style.display = 'block';
          document.getElementById('username')!.style.border =
            'solid 3px #DC1616';
        }
      });

    var passwordFeild = document
      .getElementById('password')
      ?.addEventListener('change', (e) => {
        if (this.password.length >= 6 && this.password.length <= 24) {
          if (this.forbiddenChars.test(this.password)) {
            document.getElementById('passwordError')!.style.display = 'none';
            document.getElementById('password')!.style.border =
              'solid 1px black';
          } else {
            document.getElementById('passwordError')!.style.display = 'block';
            document.getElementById('password')!.style.border =
              'solid 3px #DC1616';
          }
        } else {
          document.getElementById('passwordError')!.style.display = 'block';
          document.getElementById('password')!.style.border =
            'solid 3px #DC1616';
        }
      });
  }

  login() {
    (this.userService.authenticateUser(window.btoa(this.username),
      window.btoa(this.password))).pipe(first())
      .subscribe({
          next: () => {
              this.router.navigateByUrl('/portfolio');
          }
      });
}
}
