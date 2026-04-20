import { Routes } from '@angular/router';

// Portfolio Routes
import { Portfolio } from './components/portfolio'; 
import { Homepage } from './components/homepage/homepage';
import { AboutPage } from './components/about-page/about-page';
import { Projects } from './components/projects/projects';


export const routes: Routes = [
  {
    path: '',
    component: Portfolio,
    children: [
      { path: '', component: Homepage },
      { path: 'about', component: AboutPage },
      { path: 'projects', component: Projects },
      { path: 'contact', component: Homepage },
    ]
  }
];