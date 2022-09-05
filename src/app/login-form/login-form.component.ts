import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string = "";
  password: string = "";
  forbiddenChars = new RegExp('\^[a-z0-9_-]*$');
  showErrorMessage = false;
  errorMessage = "Error";


  constructor() { }

  ngOnInit(): void {
    const usernameFeild = document.querySelector('#password');
    usernameFeild!.addEventListener('change', (e) => {
      
    })
  }

  login() {
    if (this.forbiddenChars.test(this.username)) {

    }
    else {
      this.showErrorMessage = true;
      this.errorMessage ="Invalid Username - Must contain between 3 and 18 letters, numbers, underscore or hyphens."
    }
  }

}
