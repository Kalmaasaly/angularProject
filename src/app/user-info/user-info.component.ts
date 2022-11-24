import { UserInfo } from './../shared/user-info.model';
import { UserInfoService } from './../shared/user-info.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: [
  ]
})
export class UserInfoComponent implements OnInit{
  constructor(private toastr:ToastrService,public service: UserInfoService){}
  users!: UserInfo[];
  ngOnInit(): void {
     this.service.getUsers().then(data=>this.users=data);
     this.toastr.success('Submited successfuly','User List');
  }

}
