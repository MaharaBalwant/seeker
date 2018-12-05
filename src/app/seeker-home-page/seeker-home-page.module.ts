import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekerHomeCompComponent } from './seeker-home-comp/seeker-home-comp.component';
import { SeekerHomeProfileSecComponent } from './seeker-home-comp/seeker-home-profile-sec/seeker-home-profile-sec.component';
import { SeekerHomeAddpostSecComponent } from './seeker-home-comp/seeker-home-addpost-sec/seeker-home-addpost-sec.component';
import { SeekerHomeShowpostsSecComponent } from './seeker-home-comp/seeker-home-showposts-sec/seeker-home-showposts-sec.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SeekerHomeProfileSecComponent, 
    SeekerHomeCompComponent, 
    SeekerHomeAddpostSecComponent, 
    SeekerHomeShowpostsSecComponent
  ]
})
export class SeekerHomePageModule { }
