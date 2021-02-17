import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';
import {UserService} from '../service/User.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  registeredForm: FormGroup;
  submitted = false;

  constructor(private userservice: UserService,
              private loginService: AuthenticationService,
              private router: Router,
              private formBuilder: FormBuilder,
              @Inject(DOCUMENT) private doc: Document) {
  }

  ngOnInit(): void {
    this.registeredForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f() {
    return this.registeredForm.controls;
  }

  checkLogin() {
    this.submitted = true;

    if (this.registeredForm.invalid) {
      return;
    }

    this.loginService.authenticate(this.username, this.password).subscribe(data => {
        this.router.navigate(['/userhome/' + this.username]);
        this.invalidLogin = false;
        // console.log(data);
      },
      error1 => {
        this.invalidLogin = true;
        alert('invalid login');
        this.doc.defaultView.location.reload();
      });

  }
}
