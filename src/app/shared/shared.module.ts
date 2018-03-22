import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClickOutsideModule } from 'ng4-click-outside';
import { ScrollDirective } from './scroll/scroll.directive';
import { Nl2BrPipeModule } from 'nl2br-pipe';
import { SortDataPipe } from '../pipes/sort-data.pipe';


import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import { MenuItems } from './menu-items/menu-items';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
    ClickOutsideModule,
    ScrollDispatchModule,
    Nl2BrPipeModule
  ],
  declarations: [
    ScrollDirective,
    SortDataPipe
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
    ClickOutsideModule,
    ScrollDirective,
    Nl2BrPipeModule,
    SortDataPipe
   ],
  providers: [
    MenuItems
  ]
})
export class SharedModule { }
