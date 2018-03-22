import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import {
  MailsService,
  PagerService
} from '../../../../services';

@Component({
  selector: 'app-mail-id',
  templateUrl: './mail-by-id.component.html',
  styleUrls: ['./mail-by-id.component.scss']
})
export class MailByIdComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  mail: any;
  id: any;
  error: string;
  body:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private translate: TranslateService,
    private mailsService:MailsService
  ) {
    this.route.params.subscribe(
      params => {
        this.id = params.id;
      });
      this.subscription.add(translate.get('WRONG_ERROR').subscribe((res: string) => {
        this.error = res;
      }));
  }

  ngOnInit() {
    if (this.id) {
      this.getMail(this.id);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getMail(id): void {
    this.subscription.add(this.mailsService.getById(id)
      .subscribe(data => {
        this.mail = data;
      },
      error => {
        this.snackBar.open(this.error, 'X', {
          duration: 2000,
        });
      }, 
      () => {

      }));
  }

  onBack(): void {
    this.router.navigate(['/mails']);
  }

}
