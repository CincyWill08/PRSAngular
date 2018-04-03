import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

const url = "http://localhost:59510/Users/";

@Injectable()
export class UserService {

  List(): Observable<User[]>{
  	return this.http.get(url+"List") as Observable<User[]>;
  }

  Get(Id: string): Observable<User>{
  	return this.http.get(url+"Get/"+Id) as Observable<User>;
  }

  Login(username: string, password: string): Observable<any>{
    return this.http.get(url+"Login/"+username+"/"+password) as Observable<any>;
  }

  Create(user: User): Observable<any> {
  	return this.http.post(url+"Create", user) as Observable<any>;
  }

  Change(user: User): Observable<any> {
  	return this.http.post(url+"Change", user) as Observable<any>;
  }

  Remove(user: User): Observable<any> {
  	return this.http.post(url+"Remove", user) as Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
