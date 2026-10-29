import { Routes } from '@angular/router';
import { RefinedServicesComponent, ServiceDetailComponent, TechnologyStackComponent } from './refined-pages';
import { FinalAboutComponent, FinalContactComponent, FinalHomeComponent, FinalNotFoundComponent, FinalProjectDetailComponent, FinalProjectsComponent } from './final-pages';

export const routes: Routes = [
  { path: '', component: FinalHomeComponent, title: 'VT Visions Tech — Software that moves ideas forward' },
  { path: 'services', component: RefinedServicesComponent, title: 'Services — VT Visions Tech' },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'projects', component: FinalProjectsComponent, title: 'Projects — VT Visions Tech' },
  { path: 'projects/:slug', component: FinalProjectDetailComponent },
  { path: 'about', component: FinalAboutComponent, title: 'About — VT Visions Tech' },
  { path: 'contact', component: FinalContactComponent, title: 'Start a project — VT Visions Tech' },
  { path: 'technology-stack', component: TechnologyStackComponent, title: 'Technology Stack — VT Visions Tech' },
  { path: '**', component: FinalNotFoundComponent, title: 'Page not found — VT Visions Tech' }
];
