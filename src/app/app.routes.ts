// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home-component/home-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // Lazy-loaded feature routes
//   {
//     path: 'platform',
//     loadComponent: () =>
//       import('./features/platform/platform.component')
//         .then(m => m.PlatformComponent),
//   },
//   {
//     path: 'features',
//     loadComponent: () =>
//       import('./features/feature-list/feature-list.component')
//         .then(m => m.FeatureListComponent),
//   },
//   {
//     path: 'contact',
//     loadComponent: () =>
//       import('./features/contact/contact.component')
//         .then(m => m.ContactComponent),
//   },
  {
    path: '**',
    redirectTo: '',
  },
];