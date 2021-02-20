import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  username = '';
  password = '';

  constructor(private loginService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }


  adminLogin() {
    this.loginService.authenticate(this.username, this.password).subscribe(data => {
      this.router.navigate(['/admin/' + this.username]);
    });
  }
}
