import {CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router:Router){}
    canActivate(){
        if(window.localStorage.getItem("jwtToken")){
            return true;
        } else{
            this.router.navigate(["/login"]);
            return false;
        }
    }
}