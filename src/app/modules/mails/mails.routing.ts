import { Routes } from '@angular/router';

import { MailsComponent } from './mails.component';
import { MailsAllComponent } from './components/mails-all/mails-all.component';
import { MailByIdComponent } from './components/mail-by-id/mail-by-id.component';

export const MailsRoutes: Routes = [
  {
    path: '',
    component: MailsComponent,
  },
  {
    path: ':id',
    component: MailByIdComponent,
  }
];