import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { SlicePipe } from '@angular/common';

import {
  MailsService,
} from '../../../../services';

@Component({
  selector: 'app-mails-single',
  templateUrl: './mails-single.component.html',
  styleUrls: ['./mails-single.component.scss']
})
export class MailsSingleComponent implements OnInit, OnDestroy {

  @Input() singleMail: any;
  private subscription = new Subscription();
  result: any;

  constructor(
    private mailsService: MailsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClick(id){
    this.router.navigate(['/mails', id]);
  }

}
