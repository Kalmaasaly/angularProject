import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-renew-license',
  templateUrl: './renew-license.component.html',
  styleUrls: ['./renew-license.component.css'],
})
export class RenewLicenseComponent implements OnInit{

  startDateValue:Date=new Date();
  expirDateValue?:Date;

  selectedMethod:any=null;
  methods: any[] = [
    { name: 'Credit Card', key: 'CC' },
    { name: 'Cheque', key: 'CQ' },
    { name: 'PayPal', key: 'PP' }
  ];


  ngOnInit(): void {
    this.selectedMethod=this.methods[0];
  }

  onSubmit(_t5: NgForm) {
    
  }
}
