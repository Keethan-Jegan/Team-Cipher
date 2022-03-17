import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DocumentsComponent } from './dashboard/documents/documents.component';
import { FoldersComponent } from './dashboard/folders/folders.component';
import { StarredComponent } from './dashboard/starred/starred.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { TrashComponent } from './dashboard/trash/trash.component';
import { AddComponent } from './dashboard/add/add.component';
import { SearchComponent } from './dashboard/search/search.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { InfoComponent } from './dashboard/info/info.component';
import { PeopleComponent } from './dashboard/people/people.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DefineUserComponent } from './admin-dashboard/define-user/define-user.component';
import { ManageUserComponent } from './admin-dashboard/manage-user/manage-user.component';
import { BugReportComponent } from './admin-dashboard/bug-report/bug-report.component';
import { AdminSearchComponent } from './admin-dashboard/admin-search/admin-search.component';
import { AdminNotificationComponent } from './admin-dashboard/admin-notification/admin-notification.component';
import { AdminInfoComponent } from './admin-dashboard/admin-info/admin-info.component';
import { AdminNotifyComponent } from './admin-dashboard/admin-notify/admin-notify.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    DashboardComponent,
    HomeComponent,
    DocumentsComponent,
    FoldersComponent,
    StarredComponent,
    SettingsComponent,
    TrashComponent,
    SearchComponent,
    NotificationComponent,
    InfoComponent,
    AdminDashboardComponent,
    DefineUserComponent,
    ManageUserComponent,
    BugReportComponent,
    AdminSearchComponent,
    AdminNotificationComponent,
    AdminInfoComponent,
    AdminNotifyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatSliderModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'login', component:LoginComponent},
      {path: 'register',component:RegisterComponent},
      {path: 'admin-login',component:AdminLoginComponent},
      {path: 'admin-register',component:AdminRegisterComponent},
      {path:'dashboard',component:DashboardComponent},
      {path: 'add',component:AddComponent},
      {path:'documents',component:DocumentsComponent},
      {path:'folders',component:FoldersComponent},
      {path:'starred',component:StarredComponent},
      {path:'settings',component:SettingsComponent},
      {path:'trash',component:TrashComponent},
      {path:'search',component:SearchComponent},
      {path:'notification',component:NotificationComponent},
      {path:'info',component:InfoComponent},
      {path:'people',component:PeopleComponent},
      {path:'admin-search',component:AdminSearchComponent},
      {path:'admin-notification',component:AdminNotificationComponent},
      {path:'admin-info',component:AdminInfoComponent},
      {path:'bug-report',component:BugReportComponent},
      {path:'define-user',component:DefineUserComponent},
      {path:'manage-user',component:ManageUserComponent},
      {path: 'admin-notify',component:AdminNotifyComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
