import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {
  ConfirmBoxConfigModule,
  NgxAwesomePopupModule,
} from '@costlydeveloper/ngx-awesome-popup';
import { RenewLicenseComponent } from './license-info/renew-license/renew-license.component';

import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng/api';

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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    ToastModule,
    MessageModule,
    PanelModule,
    ToastrModule.forRoot(),
    RouterModule,
    NgxAwesomePopupModule.forRoot(),

    ConfirmBoxConfigModule.forRoot(),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
