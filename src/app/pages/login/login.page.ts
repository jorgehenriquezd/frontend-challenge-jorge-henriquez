import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  form: FormGroup;
  revealedPassword: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public utils: UtilsService
  ) {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {

  }

  submit() {
    if (this.form.valid) {
      this.utils.goTo('/home');
      this.utils.presentToast('Welcome!', 1500, 'tertiary')
      localStorage.setItem('user', this.email.value);
      this.form.reset();
    }
  }


  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
