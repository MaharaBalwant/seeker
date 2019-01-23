import { SharedService } from './../shared.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekerMessagesComponentComponent } from './seeker-messages-component/seeker-messages-component.component';
import { MessagesListComponent } from './seeker-messages-component/messages-list/messages-list.component';
import { MessagesViewComponent } from './seeker-messages-component/messages-view/messages-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    SeekerMessagesComponentComponent, 
    MessagesListComponent, 
    MessagesViewComponent
  ],
  exports: [ 
    SeekerMessagesComponentComponent, 
    MessagesListComponent, 
    MessagesViewComponent
  ],
  providers: [
    SharedService
  ]
})
export class SeekerMessagesModule { 
  constructor(){
    console.log('Message module loaded');
  }
}
