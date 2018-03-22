import { Injectable } from '@angular/core';

export interface ChildrenItems {
  link: string;
  name: string;
  icon: string;
  type?: string;
}

export interface Menu {
  link: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    link: '/mails',
    name: 'MAILS',
    type: 'sub',
    icon: 'lnr-layers',
  },
  {
    link: 'lang',
    name: 'LANGUAGE',
    type: 'lang',
    icon: 'lnr-earth',
    children: [
      {link: 'en',name: 'ENGLISH',icon:'lnr-flag'},
      {link: 'de',name: 'DEUTSCH',icon: 'lnr-flag'},
    ]
  },
  {
    link: 'more',
    name: 'MORE',
    type: 'more',
    icon: 'lnr-menu',
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

}
