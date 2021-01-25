import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'forgot-password',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;

  constructor(public route: ActivatedRoute) {}
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required] }),
      agCode: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.form.reset();
  }
}
