import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(null, {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    password: new FormControl(null, { validators: [Validators.required] }),
    agCode: new FormControl(null, { validators: [Validators.required] }),
  });

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    // this.form = new FormGroup({
    //   email: new FormControl(null, {
    //     validators: [Validators.required, Validators.minLength(3)],
    //   }),
    //   password: new FormControl(null, { validators: [Validators.required] }),
    //   ngCode: new FormControl(null, { validators: [Validators.required] }),
    // });
  }
  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.form.reset();
  }
}
