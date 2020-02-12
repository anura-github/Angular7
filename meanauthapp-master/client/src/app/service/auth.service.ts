import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import "rxjs/add/operator/map";
Observable;
import { retry, catchError } from "rxjs/operators";
//import {tokenNotExpired} from "@angular2-jwt";
import { Register } from "../model/register";
import { Login } from "../model/login";
import { Observable } from "rxjs/index";
import { RegisterResponse } from "../register.response/register-response";
import { LoginResponse } from "../login.response/login-response";


@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {
    //this.isDev = true;
  }

 // loggedIn():any{
   // return tokenNotExpired(localStorage.getItem("jwtToken"));
 // }
  // uri : /users/register
  // visibility : public
  // accept register object
  // error specs

  registerUser(register: Register): Observable<RegisterResponse> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    return this.http.post<RegisterResponse>(
      "http://localhost:8080/users/register",
      register,
      {
        headers: headers
      }
    );
  }

  loginUser(login: Login): Observable<LoginResponse> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    return this.http.post<LoginResponse>(
      "http://localhost:8080/users/authenticate",
      login,
      {
        headers: headers
      }
    );
  }
}
