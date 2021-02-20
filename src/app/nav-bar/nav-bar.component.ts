import {Component, Inject, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  show: boolean;

  constructor(private authService: AuthenticationService,
              @Inject(DOCUMENT) private Doc: Document) { }

  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  logout() {
    this.authService.logOut();
    this.Doc.defaultView.location.reload();
  }

}
