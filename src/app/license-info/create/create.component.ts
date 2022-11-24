import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  implements OnInit{
  licenseId: any;
  constructor(private route: ActivatedRoute,private router: Router){}

  ngOnInit(): void {
    this.licenseId = this.route.snapshot.params['licenseId'];
  }
  public onSubmit(form:NgForm){
  }
}
