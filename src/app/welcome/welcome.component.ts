import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Templates {
  label: string;
  routePath: string;
  imagePath: string;
}

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  templates: Templates[] = [
    {
      label: 'Iconic',
      routePath: '/iconic/home',
      imagePath: 'iconic/images/logo_img.png'
    }
  ]

}
