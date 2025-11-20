import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface MenuItem {

  label: string;
  path: string;

}

@Component({
  selector: 'app-footer1',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './footer1.component.html',
  styleUrl: './footer1.component.css'
})
export class Footer1Component {

  menuItems: MenuItem[] = [
    { label: 'HOME', path: '/iconic/home' },
    { label: 'ABOUT', path: '/iconic/about' },
    { label: 'SERVICES', path: '/iconic/services' },
    { label: 'BLOG', path: '/iconic/blog' },
    { label: 'CONTACT', path: '/iconic/contact' },
  ];

  getPathByLabel(targetLabel: string): string {
    const itemEncontrado = this.menuItems.find(item => item.label.toLowerCase === targetLabel.toLowerCase);
    return itemEncontrado ? itemEncontrado.path : '';
  }

}
