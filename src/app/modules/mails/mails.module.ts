import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MailsRoutes } from './mails.routing';
import { MailsComponent } from './mails.component';
import { MailsAllComponent } from './components/mails-all/mails-all.component';
import { MailsSingleComponent } from './components/mails-single/mails-single.component';
import { MailByIdComponent } from './components/mail-by-id/mail-by-id.component';

import {
  MailsService,
} from '../../services';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MailsRoutes),
  ],
  declarations: [
    MailsComponent,
    MailsAllComponent,
    MailsSingleComponent,
    MailByIdComponent
  ],
  exports:[

  ],
  providers:[
    MailsService,
  ]
})
export class MailsModule { }