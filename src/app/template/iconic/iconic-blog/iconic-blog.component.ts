import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardListWithPaginationComponent } from "./internal-components/card-list-with-pagination/card-list-with-pagination.component";
import { VisibilityObserverDirective } from '../../../visibility-observer.directive';

@Component({
  selector: 'app-iconic-blog',
  standalone: true,
  imports: [
    CommonModule,
    CardListWithPaginationComponent,
    VisibilityObserverDirective
  ],
  templateUrl: './iconic-blog.component.html',
  styleUrl: './iconic-blog.component.css'
})
export class IconicBlogComponent {

  isVisible: boolean = false;

  handleVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}