import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicePitch } from '../iconic-service/internal-components/service-pitch';
import { ServicePitchCard1ListComponent } from '../iconic-service/internal-components/service-pitch-card1-list/service-pitch-card1-list.component';
import { Testimonial1Component } from "../iconic-service/internal-components/testimonial1/testimonial1.component";
import { PricingPlanCardListComponent } from './internal-components/pricing-plan-card-list/pricing-plan-card-list.component';
import { PricingPlan } from './internal-components/pricing-plan';
import { Brand1ListComponent } from './internal-components/brand1List/brand1-list.component';
import { Menu1Component } from '../iconic-template/internal-components/menu1/menu1.component';
import { Footer1Component } from '../iconic-template/internal-components/footer1/footer1.component';
import { ServicePitch1Component } from './internal-components/servicePitch1/service-pitch-1.component';
import { ServicePitch2Component } from './internal-components/servicePitch2/service-pitch-2.component';

@Component({
  selector: 'app-home-iconic',
  standalone: true,
  imports: [
    CommonModule,
    Menu1Component,
    Brand1ListComponent,
    ServicePitchCard1ListComponent,
    ServicePitch1Component,
    ServicePitch2Component,
    PricingPlanCardListComponent,
    Footer1Component,
    Testimonial1Component
  ],
  templateUrl: './home-iconic.component.html',
  styleUrl: './home-iconic.component.css'
})
export class HomeIconicComponent {

  dadosDasColunas: PricingPlan[] = [
    {
      id: 1,
      label: 'Beginner',
      services: ['1 GB of space', 'Unlimited traffic', 'Forum access', '24/7 Support'],
      color: '#7A90FF',
      price: '59',
      isMain: false
    },
    {
      id: 2,
      label: 'Advanced',
      services: ['1 GB of space', 'Unlimited traffic', 'Forum access', '24/7 Support'],
      color: '#7A90FF',
      price: '96',
      isMain: true
    },
    {
      id: 3,
      label: 'Professional',
      services: ['1 GB of space', 'Unlimited traffic', 'Forum access', '24/7 Support'],
      color: '#7A90FF',
      price: '108',
      isMain: false
    },
    {
      id: 4,
      label: 'Corporate',
      services: ['1 GB of space', 'Unlimited traffic', 'Forum access', '24/7 Support'],
      color: '#7A90FF',
      price: '200',
      isMain: false
    }
  ];

  servicePitchList: ServicePitch[] = [
    {
      id: 1,
      title: 'Data Analytics',
      subTitle: '',
      message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.',
      urlImage: 'iconic/images/icone-1.png',
      urlContent: '#'
    },
    {
      id: 2,
      title: 'Market Analysis',
      subTitle: '',
      message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.',
      urlImage: 'iconic/images/icone-2.png',
      urlContent: '#'
    },
    {
      id: 3,
      title: 'Customer Support',
      subTitle: '',
      message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.',
      urlImage: 'iconic/images/icone-3.png',
      urlContent: '#'
    }
  ]

}
