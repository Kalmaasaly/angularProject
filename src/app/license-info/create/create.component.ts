import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MessageService} from 'primeng/api';
import { LicenseInfoService } from 'src/app/shared/license-info.service';
import { LicenseAssignedUser } from 'src/app/shared/license-user-assigned.module';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MessageService]

})
export class CreateComponent  implements OnInit{

  licenseAssigneeform!: FormGroup;
  licenseId: any;
  public assignee:LicenseAssignedUser=new LicenseAssignedUser();
  constructor(private fb: FormBuilder,private messageService: MessageService,
    private route: ActivatedRoute
    ,private router: Router,public service:LicenseInfoService,private toastr:ToastrService){}

  ngOnInit(): void {
    this.licenseId = this.route.snapshot.params['licenseId'];
    this.service.formData.licenseId=this.licenseId;


    this.licenseAssigneeform = this.fb.group({
      'licenseId': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required)
  });
  }
  public onSubmit(form:NgForm){
  
    this.service.createAssignedLicense().subscribe({
      next:(res)=>{
         var inof:LicenseAssignedUser=res;
         console.log(inof.toString());
         this.service.formData=inof;
       },
       error:(e)=>{
        console.log(e)
       }
     });
     this.messageService.add({severity:'success',
     summary:'Created successfuly', 
     detail:'Success Assigned License to User',
    sticky: false});
  }
}
