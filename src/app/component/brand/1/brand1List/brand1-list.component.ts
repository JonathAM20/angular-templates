import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand1-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './brand1-list.component.html',
  styleUrl: './brand1-list.component.css'
})
export class Brand1ListComponent implements OnInit {

  brandList = [
    { id: 1, url: 'iconic/images/client_logo/client_logo-1.png' },
    { id: 2, url: 'iconic/images/client_logo/client_logo-2.png' },
    { id: 3, url: 'iconic/images/client_logo/client_logo-3.png' },
    { id: 4, url: 'iconic/images/client_logo/client_logo-4.png' },
    { id: 5, url: 'iconic/images/client_logo/client_logo-5.png' },
  ];

  isAnimating: boolean = false;

  animationDurationMs: number = 500;

  ngOnInit() {
    setInterval(() => this.slideLeft(), 3000);
  }

  slideLeft() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    setTimeout(() => {

      const firstItem = this.brandList.shift();
      if (firstItem) {
        this.brandList.push(firstItem);
      }

      this.isAnimating = false;

    }, this.animationDurationMs);
  }
}