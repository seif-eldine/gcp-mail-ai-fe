import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailHomeRoutingModule } from './mail-home.routing.module';
import { MailSidebarComponent } from './components/mail-sidebar/mail-sidebar.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailHomeComponent } from './components/mail-home/mail-home.component';



@NgModule({
  declarations: [
    MailHomeComponent,
    MailSidebarComponent,
    MailViewComponent
  ],
  imports: [
    CommonModule,
    MailHomeRoutingModule
  ]
})
export class MailHomeModule { }
