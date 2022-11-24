import { UserInfo } from './user-info.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {



  constructor(private http: HttpClient) { }
  readonly baseURL="http://localhost:5144/api/license/users";
  list!: UserInfo[];


  getUsers(){

    var users= this.http.get(this.baseURL)
    .toPromise()
    .then(res=>this.list=res as UserInfo[]);
    console.log(users);
    return users;
  }
}
