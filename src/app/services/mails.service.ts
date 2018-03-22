import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Mail } from './../models/mail';
import { ConfigService } from './config.service';

@Injectable()
export class MailsService {

    constructor(
        private http: HttpClient,
        private config:ConfigService,
    ) { }

    getAll(): Observable<Mail[]> {
        return this.http.get<Mail[]>(this.config.mails_url) 
    }

    getById(id: number): Observable<Mail[]> {
        return this.http.get<Mail[]>(this.config.mails_url + '/' + id) 
    }

}