import { LicenseInfo } from '../shared/license-info.module';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LicenseGenerator } from '../shared/license-generator.model';
import { LicenseGeneratorService } from '../shared/license-generator.service';

@Component({
  selector: 'license-generator-form',
  templateUrl: './license-generator-form.component.html',
  styles: [
  ]
})
export class LicenseGeneratorFormComponent implements OnInit {


  constructor(public service: LicenseGeneratorService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(form:NgForm){

    this.service.postBatchToken().subscribe({
     next:(res)=>{
        //this.resetForm(form);
        //console.log(res);
        //var licenseInfo:LicenseInfo=res;
        this.toastr.success('Submited successfuly','License Generator');
        var inof:LicenseInfo=res;
        console.log(inof.toString());
        this.service.licenseInfo=inof;
        this.router.navigate(['/licenseInfo']);

      },
      error:(e)=>console.log(e)
    });

  }
  public goLicenseInfo(){

    this.router.navigate(['/licenseInfo']);
  }

 public  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData=new LicenseGenerator();
  }
}


