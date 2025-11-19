import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Card {
  id: number;
  title: string;
  description: string;
  imagePath: string;
}

@Component({
  selector: 'app-card-list-with-pagination',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './card-list-with-pagination.component.html',
  styleUrl: './card-list-with-pagination.component.css'
})
export class CardListWithPaginationComponent {

  itemsPerPageOptions = [5, 10, 15, 20];
  currentPage = signal(1);
  itemsPerPage = signal(5);

  allCards = signal<Card[]>([
    {
      id: 1,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/1.jpg'
    },
    {
      id: 2,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/2.jpg'
    },
    {
      id: 3,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/3.jpg'
    },
    {
      id: 4,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/4.jpg'
    },
    {
      id: 5,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/5.jpg'
    },
    {
      id: 6,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/6.jpg'
    },
    {
      id: 7,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/1.jpg'
    },
    {
      id: 8,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/2.jpg'
    },
    {
      id: 9,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/3.jpg'
    },
    {
      id: 10,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/4.jpg'
    },
    {
      id: 11,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/5.jpg'
    },
    {
      id: 12,
      title: 'Wonderful Serenity Has Taken',
      description: 'wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      imagePath: '/iconic/images/blog/6.jpg'
    },
  ]);

  totalPages = computed(() => {
    const total = this.allCards().length;
    const perPage = this.itemsPerPage();
    return Math.max(1, Math.ceil(total / perPage));
  });

  pageNumbers = computed(() => {
    const totalPages = this.totalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  });

  paginatedCards = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    const end = start + this.itemsPerPage();
    return this.allCards().slice(start, end);
  });

  goToPage(page: number): void {
    const finalPage = Math.max(1, Math.min(page, this.totalPages()));
    this.currentPage.set(finalPage);
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }

  changeItemsPerPage(newCount: number): void {
    this.itemsPerPage.set(newCount);
    this.currentPage.set(1);
  }

}