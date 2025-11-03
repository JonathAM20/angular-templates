import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePitch } from '../../../service-pitch';

@Component({
  selector: 'app-service-pitch-card1',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './service-pitch-card1.component.html',
  styleUrl: './service-pitch-card1.component.css'
})
export class ServicePitchCard1Component {

  @Input() servicePitch!: ServicePitch;

}
