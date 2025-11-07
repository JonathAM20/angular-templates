import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../testimonial';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial1',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './testimonial1.component.html',
  styleUrl: './testimonial1.component.css'
})
export class Testimonial1Component implements OnInit {

  testimonialList: Testimonial[] = [
    {
      name: 'Ana Silva',
      role: 'Marketing Director',
      company: 'Tech Solutions Inc.',
      photoUrl: 'iconic/images/testimonial-1.jpg',
      stars: 4,
      quote: 'The service exceeded all expectations. Communication was excellent and results came quickly.'
    },
    {
      name: 'George Santos',
      role: 'Technology Director',
      company: 'Tech Solutions Inc.',
      photoUrl: 'iconic/images/testimonial-2.jpg',
      stars: 5,
      quote: 'The service exceeded all expectations. Communication was excellent and results came quickly.'
    },
    {
      name: 'Madalena Sousa',
      role: 'RH Director',
      company: 'Tech Solutions Inc.',
      photoUrl: 'iconic/images/testimonial-3.jpg',
      stars: 3,
      quote: 'The service exceeded all expectations. Communication was excellent and results came quickly.'
    }
  ];

  starArray: number[] = [];

  isAnimating: boolean = false;

  animationDurationMs: number = 500;

  ngOnInit(): void {
    setInterval(() => this.slideLeft(), 5000);
    this.starArray = Array(5).fill(0).map((x, i) => i + 1);
  }

  isStarFilled(starIndex: number, testimonial: Testimonial): boolean {
    return starIndex <= testimonial.stars;
  }

  slideLeft() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    setTimeout(() => {

      const firstItem = this.testimonialList.shift();
      if (firstItem) {
        this.testimonialList.push(firstItem);
      }

      this.isAnimating = false;

    }, this.animationDurationMs);
  }
}