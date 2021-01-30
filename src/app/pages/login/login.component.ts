import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PageService } from "../pages.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  submit: boolean = false;
  form: FormGroup = new FormGroup({
    email: new FormControl(null, { validators: [Validators.required] }),
    password: new FormControl(null, { validators: [Validators.required] }),
    agCode: new FormControl(null, { validators: [Validators.required] }),
  });

  constructor(public pageService: PageService) {}

  ngOnInit() {}
  onSavePost() {
    this.submit = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.pageService.loginUser(
      this.form.value.email,
      this.form.value.password,
      this.form.value.agCode
    );
    this.form.reset();
  }
}
