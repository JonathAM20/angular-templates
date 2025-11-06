import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../menu/menu-item';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer1',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './footer1.component.html',
  styleUrl: './footer1.component.css'
})
export class Footer1Component {

  @Input() logoUrl: string = '';
  @Input() menuItems: MenuItem[] = [];

  getPathByLabel(targetLabel: string): string {
    const itemEncontrado = this.menuItems.find(item => item.label.toLowerCase === targetLabel.toLowerCase);
    return itemEncontrado ? itemEncontrado.path : '';
  }

}
