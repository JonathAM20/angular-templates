import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu1Component } from './internal-components/menu1/menu1.component';
import { Footer1Component } from './internal-components/footer1/footer1.component';

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
export class IconicTemplateComponent { }
