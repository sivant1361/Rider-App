import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  submit = false;
  form: FormGroup = new FormGroup({
    email: new FormControl(null, { validators: [Validators.required] }),
    password: new FormControl(null, { validators: [Validators.required] }),
    agCode: new FormControl(null, { validators: [Validators.required] }),
  });

  constructor(private http: HttpClient,public router: Router) {}

  ngOnInit() {}
  onSavePost() {
    this.submit = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.http
      .post('http://localhost:3000/api/user/login', {email:this.form.value.email, password:this.form.value.password})
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigate(["/"]);
    this.form.reset();
  }
}
