import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

export interface TeamMember {
  name: string;
  role: string;
  photoUrl: string;
}

@Component({
  selector: 'app-team1',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './team1.component.html',
  styleUrl: './team1.component.css'
})
export class Team1Component implements OnInit, OnDestroy {

  teamMemberList: TeamMember[] = [
    {
      name: 'Ana Silva',
      role: 'Marketing Director',
      photoUrl: 'iconic/images/team/tm-1.jpg'
    },
    {
      name: 'George Santos',
      role: 'Technology Director',
      photoUrl: 'iconic/images/team/tm-3.jpg',
    },
    {
      name: 'Madalena Sousa',
      role: 'RH Director',
      photoUrl: 'iconic/images/team/tm-2.jpg'
    }
  ];

  isVisible: boolean = false;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) { }

  handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.isVisible = true;
        this.observer.unobserve(this.el.nativeElement);
      }
    });
  }

  ngOnInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), options);
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.unobserve(this.el.nativeElement);
    }
  }

}
