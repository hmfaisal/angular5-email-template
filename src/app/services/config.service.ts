import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

    private _api_url = '/api';
    private _mails_url = this._api_url + '/mails';

    get mails_url(): string {
        return this._mails_url;
    }

}