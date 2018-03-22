import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BidiModule } from '@angular/cdk/bidi';

import { AppComponent } from './app.component';
import { AppRoutes } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { InMemoryMaterialDataService } from './data/inMemoryMaterialData.service';
import {
  ConfigService,
  PagerService
} from './services';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryMaterialDataService, { passThruUnknownUrl: true }
    ),
    SharedModule,
    CoreModule,
    BidiModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    ConfigService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }