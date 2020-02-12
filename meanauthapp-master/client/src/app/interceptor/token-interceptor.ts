import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>>{
            let token=window.localStorage.getItem("jwtToken");
            console.log("From interceptor: "+token);
            if(token){
                req =req.clone({
                    setHeaders:{
                        Authorization: "Bearer "+token
                    }
                });
            }
        return next.handle(req);
        }

}
