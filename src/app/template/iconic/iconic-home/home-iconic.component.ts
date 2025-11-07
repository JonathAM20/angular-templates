import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PricingPlan } from '../../../component/pricing-plan/pricing-plan';
import { ServicePitch } from '../../../component/service-pitch/service-pitch';
import { Menu1Component } from '../../../component/menu/1/menu1/menu1.component';
import { Brand1ListComponent } from '../../../component/brand/1/brand1List/brand1-list.component';
import { ServicePitchCard1ListComponent } from '../../../component/service-pitch/card/1/service-pitch-card1-list/service-pitch-card1-list.component';
import { ServicePitch1Component } from '../../../component/service-pitch/1/service-pitch-1.component';
import { ServicePitch2Component } from '../../../component/service-pitch/2/service-pitch-2.component';
import { PricingPlanCardListComponent } from '../../../component/pricing-plan/1/pricing-plan-card-list/pricing-plan-card-list.component';
import { MenuItem } from '../../../component/menu/menu-item';
import { Footer1Component } from '../../../component/footer/1/footer1/footer1.component';
import { Testimonial1Component } from "../../../testimonial1/testimonial1.component";

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

  logoUrl: string = 'iconic/images/logo_img.png';
  
  menuItems: MenuItem[] = [
    { label: 'HOME', path: '/iconic/home' },
    { label: 'ABOUT', path: '/iconic/about' },
    { label: 'SERVICES', path: '/iconic/services' },
    { label: 'BLOG', path: '/iconic/blog' },
    { label: 'CONTACT', path: '/iconic/contact' },
  ];

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
