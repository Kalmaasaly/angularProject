import { LicenseAssignedUser } from './license-user-assigned.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LicenseInfoService {

  constructor(private http: HttpClient) { }
  readonly baseURL="http://localhost:5144/api/assigned";

  formData:LicenseAssignedUser=new LicenseAssignedUser();

  createAssignedLicense(){
    return this.http.post(this.baseURL,this.formData);
  }

  revokeAssignedLicense(){
    
  }
}
