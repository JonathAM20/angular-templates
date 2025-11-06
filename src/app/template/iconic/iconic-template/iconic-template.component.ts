import { Component } from '@angular/core';
import { Footer1Component } from "../../../component/footer/1/footer1/footer1.component";
import { MenuItem } from '../../../component/menu/menu-item';
import { Menu1Component } from '../../../component/menu/1/menu1/menu1.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-iconic-template',
  standalone: true,
  imports: [
    RouterOutlet,
    Menu1Component,
    Footer1Component
  ],
  templateUrl: './iconic-template.component.html',
  styleUrl: './iconic-template.component.css'
})
export class IconicTemplateComponent {

  logoUrl: string = 'iconic/images/logo_img.png';
    
    menuItems: MenuItem[] = [
      { label: 'HOME', path: '/iconic/home' },
      { label: 'ABOUT', path: '/iconic/about' },
      { label: 'SERVICES', path: '/iconic/services' },
      { label: 'BLOG', path: '/iconic/blog' },
      { label: 'CONTACT', path: '/iconic/contact' },
    ];

}
