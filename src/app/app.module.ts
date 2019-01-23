//import { SeekerMessagesModule } from './seeker-messages/seeker-messages.module';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AfterloginMenuComponent } from './afterlogin-menu/afterlogin-menu.component';
import { AddinsearchComponent } from './addinsearch/addinsearch.component';
import { UserserviceService } from './userservice.service';
import { User } from './user.module';
import { Router, CanActivate } from '@angular/router';
import { NewsearchformComponent } from './newsearchform/newsearchform.component';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { NewsearchformlistComponent } from './newsearchformlist/newsearchformlist.component';
import { SharedService } from './shared.service';
import { SeekerHomeProfileSecComponent } from './seeker-home-page/seeker-home-comp/seeker-home-profile-sec/seeker-home-profile-sec.component';
import { SeekerHomeAddpostSecComponent } from './seeker-home-page/seeker-home-comp/seeker-home-addpost-sec/seeker-home-addpost-sec.component';
import { SeekerHomeShowpostsSecComponent } from './seeker-home-page/seeker-home-comp/seeker-home-showposts-sec/seeker-home-showposts-sec.component';
import { SeekerHomeCompComponent } from './seeker-home-page/seeker-home-comp/seeker-home-comp.component';
import { RenderpopupComponent } from './common/renderpopup/renderpopup.component';
import { MessagesViewComponent } from './seeker-messages/seeker-messages-component/messages-view/messages-view.component';
import { SeekerMessagesComponentComponent } from './seeker-messages/seeker-messages-component/seeker-messages-component.component';
import { MessagesListComponent } from './seeker-messages/seeker-messages-component/messages-list/messages-list.component';

/* Custum code for authgard to block login page aftere logined users starts */
@Injectable()
class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private router:Router){};
  canActivate() {
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    if (personID != null) 
    {
      this.router.navigate(['/profile']);
      return false;
    } 
    else 
    {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
/* Custum code for authgard to block login page aftere logined users Ends */

const route = [
  {path:'home', component:HomepageComponent},
  {path:'profile', component:UserprofileComponent},
  {path:'addinsearch', component:AddinsearchComponent /*, canActivate: [OnlyLoggedInUsersGuard] */},
  {path:'test', component:SeekerHomeCompComponent},
  {path:'messages', component: SeekerMessagesComponentComponent},
  {path: 'messages/:id', component: SeekerMessagesComponentComponent},
  {path:'', component:HomepageComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomepageComponent,
    UserprofileComponent,
    AfterloginMenuComponent,
    AddinsearchComponent,
    NewsearchformComponent,
    NewsearchformlistComponent,
    SeekerHomeCompComponent,
    SeekerHomeProfileSecComponent,
    SeekerHomeAddpostSecComponent,
    SeekerHomeShowpostsSecComponent,
    RenderpopupComponent,
    SeekerMessagesComponentComponent,
    MessagesViewComponent,
    MessagesListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    //SeekerMessagesModule
  ],
  providers: [
    UserserviceService,
    OnlyLoggedInUsersGuard,
    SharedService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
