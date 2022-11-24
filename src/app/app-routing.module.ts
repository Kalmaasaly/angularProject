import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenseGeneratorFormComponent } from './license-generator-form/license-generator-form.component';
import { CreateComponent } from './license-info/create/create.component';
import { LicenseInfoComponent } from './license-info/license-info.component';
import { RenewLicenseComponent } from './license-info/renew-license/renew-license.component';


const appRoutes: Routes = [


  { path: 'licenseInfo',
    component: LicenseInfoComponent
  },
  { path: 'license',
  component: LicenseGeneratorFormComponent
   },
   {
    path:'licenseInfo/create/:licenseId',component:CreateComponent
   },
   {
    path:'licenseInfo/renewlicense',component:RenewLicenseComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
