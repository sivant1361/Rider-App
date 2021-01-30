import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageService } from "../pages.service";

@Component({
  selector: 'forgot-password',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
  submit: boolean=false;

  constructor(public pageService: PageService) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required] }),
      agCode: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  onSavePost() {
    this.submit=true
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.pageService.requestPassword(
      this.form.value.email,
      this.form.value.agCode
    );
    this.form.reset();
  }
}
