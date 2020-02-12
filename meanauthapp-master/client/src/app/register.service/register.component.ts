import { Component, OnInit } from "@angular/core";
import { Register } from "../model/register";

import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();

  constructor(private auth: AuthService, private router: Router) {}

  onRegisterSubmit() {
    console.log("inside the submit");
    console.log(JSON.stringify(this.register));

    this.auth.registerUser(this.register).subscribe(data => {
      if (data.success) {
        this.router.navigate(["/login"]);        
      } else {
        this.router.navigate(["/register"]);
      }
    });
  }
  ngOnInit() {}
}

