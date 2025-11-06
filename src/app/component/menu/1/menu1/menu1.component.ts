import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from '../../menu-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu1',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './menu1.component.html',
  styleUrl: './menu1.component.css'
})
export class Menu1Component {

  @Input() logoUrl: string = '';
  @Input() menuItems: MenuItem[] = [];

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getPathByLabel(targetLabel: string): string {
    const itemEncontrado = this.menuItems.find(item => item.label.toLowerCase === targetLabel.toLowerCase);
    return itemEncontrado ? itemEncontrado.path : '';
  }

}
