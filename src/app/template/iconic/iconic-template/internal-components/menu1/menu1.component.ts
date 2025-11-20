import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface MenuItem {

  label: string;
  path: string;

}

@Component({
  selector: 'app-menu1',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './menu1.component.html',
  styleUrl: './menu1.component.css'
})
export class Menu1Component {

  @Input() logoUrl: string = '';

  menuItems: MenuItem[] = [
    { label: 'HOME', path: '/iconic/home' },
    { label: 'ABOUT', path: '/iconic/about' },
    { label: 'SERVICES', path: '/iconic/services' },
    { label: 'BLOG', path: '/iconic/blog' },
    { label: 'CONTACT', path: '/iconic/contact' },
  ];

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getPathByLabel(targetLabel: string): string {
    const itemEncontrado = this.menuItems.find(item => item.label.toLowerCase === targetLabel.toLowerCase);
    return itemEncontrado ? itemEncontrado.path : '';
  }

}
