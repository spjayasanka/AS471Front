import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../dto/User';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private loginService: AuthenticationService,
              private router: Router) { }

  addUser(user: User): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/register', user);

  }

  getUserByUsername(user: string): Observable<User> {
     return this.http.get<User>('http://localhost:8080/getUserByUsername/' + user);
  }

}
