import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LicenseGeneratorFormComponent } from './license-generator-form/license-generator-form.component';
import { LicenseInfoComponent } from './license-info/license-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CreateComponent } from './license-info/create/create.component';
import { ConfirmBoxConfigModule, NgxAwesomePopupModule } from '@costlydeveloper/ngx-awesome-popup';
import { RenewLicenseComponent } from './license-info/renew-license/renew-license.component';


import { CalendarModule } from "primeng/calendar";

@NgModule({
  declarations: [
    AppComponent,
    LicenseGeneratorFormComponent,
    LicenseInfoComponent,
    UserInfoComponent,
    CreateComponent,
    RenewLicenseComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    NgxAwesomePopupModule.forRoot(),


    ConfirmBoxConfigModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



