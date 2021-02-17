import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/User.service';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {User} from '../dto/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // username = '';
  // password = '';
  invalidLogin = false;
  selectedUser: User = new User();

  registeredForm: FormGroup;
  submitted = false;

  constructor(private userservice: UserService,
              private loginService: AuthenticationService,
              private router: Router,
              private formBuilder: FormBuilder,
              @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {

  }

  register() {

    console.log(this.selectedUser.username);

    this.userservice.addUser(this.selectedUser).subscribe(isOk => {
      if (isOk) {
        alert('User added Successfully');
      } else {
        alert('User add failed');
      }
    });

  }

}
