import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface MenuItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-menu1',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './menu1.component.html',
  styleUrl: './menu1.component.css'
})
export class Menu1Component {

  @Input() menuItems: MenuItem[] = [
    { label: 'HOME', link: '/iconic' },
    { label: 'ABOUT', link: '/about' },
    { label: 'SERVICE', link: '/service' },
    { label: 'BLOG', link: '/blog' },
    { label: 'ELEMENTS', link: '/elements' },
    { label: 'CONTACTS', link: '/contact' },
  ];

  isMenuOpen: boolean = false;

  logoUrl: string = 'iconic/images/logo_img.png';

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
