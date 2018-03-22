import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Error404Component} from './core/error404/error-404.component';

export const AppRoutes: Routes = [
  {path: '', redirectTo: 'mails', pathMatch: 'full'},
  {
    path: 'mails',
    loadChildren: './modules/mails/mails.module#MailsModule',
  },
  {
    path: 'session',
    loadChildren: './modules/session/session.module#SessionModule',
  },

  // otherwise redirect to 404
  {path: '**', redirectTo: 'session/404'}
];
