import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VisibilityObserverDirective } from '../../../../../visibility-observer.directive';

export interface TeamMember {
  name: string;
  role: string;
  photoUrl: string;
}

@Component({
  selector: 'app-team1',
  standalone: true,
  imports: [
    CommonModule,
    VisibilityObserverDirective
  ],
  templateUrl: './team1.component.html',
  styleUrl: './team1.component.css'
})
export class Team1Component {

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

  handleVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}
