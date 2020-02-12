import { Component, OnInit } from "@angular/core";
import { Login } from "../model/Login";

import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: Login = new Login();

  constructor(private auth: AuthService, private router: Router) {}

  onLoginSubmit() {
    console.log("inside the login");
    console.log(JSON.stringify(this.login));

    this.auth.loginUser(this.login).subscribe(data => {
      if (data.success) {
        console.log("Login success");
        //var localStorage: Storage;
        localStorage.setItem("jwtToken",data.token);
        console.log(data.token);
        localStorage.setItem("user",JSON.stringify(data.user));
        console.log(data.user)
        this.login = new Login();
      } else {
        console.log("failure");
      }
    });
  }
  ngOnInit() {}
}

