import { LicenseInfo } from './license-info.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LicenseGenerator } from './license-generator.model';

@Injectable({
  providedIn: 'root'
})
export class LicenseGeneratorService {

  constructor(private http: HttpClient) { }
  readonly baseURL="http://localhost:5144/api/license";

  formData:LicenseGenerator=new LicenseGenerator();
  licenseInfo:LicenseInfo=new LicenseInfo();

  

  postBatchToken(){
    return this.http.post(this.baseURL,this.formData)
  }
}
