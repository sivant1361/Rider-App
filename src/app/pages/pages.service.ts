import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { Login, ForgotPassword } from "./pages.model";

@Injectable({ providedIn: "root" })
export class PageService {
  constructor(private http: HttpClient, private router: Router) {}

  loginUser(email: string, password: string, agCode: string) {
    const login: Login = { email: email, password: password, agCode: agCode };
    this.http
      .post("http://localhost:3000/api/user/login", login)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigate(["/"]);
  }

  requestPassword(email: string, agCode: string) {
    const fp: ForgotPassword = { email: email, agCode: agCode };
    this.http
      .post("http://localhost:3000/api/user/forgotpassword", fp)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigate(["/"]);
  }
}
