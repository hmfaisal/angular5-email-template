import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import {
  MailsService,
  PagerService
} from '../../../../services';

@Component({
  selector: 'app-mails-all',
  templateUrl: './mails-all.component.html',
  styleUrls: ['./mails-all.component.scss']
})
export class MailsAllComponent implements OnInit, OnDestroy{

  private subscription = new Subscription();
  mails: any[];
  data: any[] = [];
  pager: any = {};
  pagedItems: any[];

  selectedMessage: any;

  error: string;
  endReached = false;

  constructor(
    private mailsService: MailsService,
    private pagerService: PagerService,
    private router: Router,
    public snackBar: MatSnackBar,
    private translate: TranslateService,
  ) {
    this.subscription.add(translate.get('WRONG_ERROR').subscribe((res: string) => {
      this.error = res;
    }));
    
  }

  ngOnInit() {
    this.getMails();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getMails(): void {
    this.subscription.add(this.mailsService.getAll()
      .subscribe(data => {
        this.mails = data;
        this.setPage(1);
      },
      error => {
        this.snackBar.open(this.error, 'X', {
          duration: 2000,
        });
      }));
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.mails.length, page);
    let pagedItems = this.mails.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.data = this.data.concat(pagedItems);
  }

  onScroll(e) {
    this.endReached = e.endReached;
    if (this.endReached == true) {
      this.setPage(this.pager.currentPage + 1);
    }
  }

  onSelect(id: number): void {
    this.router.navigate(['/mails', id]);
  }

}
