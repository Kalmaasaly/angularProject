import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LicenseGeneratorService } from '../shared/license-generator.service';
import { ConfirmBoxInitializer, DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';


@Component({
  selector: 'app-license-info',
  templateUrl: './license-info.component.html',
  styleUrls: ['./license-info.component.css']
})
export class LicenseInfoComponent implements OnInit {

   licenseInfo:any;

  constructor(private route: ActivatedRoute,public service: LicenseGeneratorService) { }


  ngOnInit(): void {
    //this.licenseInfo=this.service.licenseInfo;
  }

  confirmBox(license:any) {

    const confirmBox = new ConfirmBoxInitializer();

    confirmBox.setTitle('Are you sure?');
    confirmBox.setMessage('Confirm to revoke license!'+license);
    confirmBox.setButtonLabels('YES', 'NO');
    // Choose layout color type

    confirmBox.setConfig({

        layoutType: DialogLayoutDisplay.DANGER // SUCCESS | INFO | NONE | DANGER | WARNING

    });



    // Simply open the popup and listen which button is clicked

    confirmBox.openConfirmBox$().subscribe(resp => {

        // do some action after user click on a button

        console.log('Clicked button response: ', resp);

    });

}
}
