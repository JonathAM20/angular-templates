import { Routes } from '@angular/router';
import { IconicTemplateComponent } from './template/iconic/iconic-template/iconic-template.component';
import { IconicAboutComponent } from './template/iconic/iconic-about/iconic-about.component';
import { IconicServiceComponent } from './template/iconic/iconic-service/iconic-service.component';
import { IconicBlogComponent } from './template/iconic/iconic-blog/iconic-blog.component';
import { IconicContactComponent } from './template/iconic/iconic-contact/iconic-contact.component';
import { HomeIconicComponent } from './template/iconic/iconic-home/home-iconic.component';

export const routes: Routes = [
    {
        path: '', component: HomeIconicComponent
    },
    {
        path: 'iconic/home', component: HomeIconicComponent
    },
    {
        path: 'iconic',
        component: IconicTemplateComponent,
        children: [
            { path: 'about', component: IconicAboutComponent },
            { path: 'services', component: IconicServiceComponent },
            { path: 'blog', component: IconicBlogComponent },
            { path: 'contact', component: IconicContactComponent }
        ]
    }
];
