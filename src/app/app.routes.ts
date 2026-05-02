

import { Routes } from '@angular/router';
import { HomeComponent } from './features/home-component/home-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  // Pages (Lazy Loaded)
  {
    path: 'platform',
    loadComponent: () =>
      import('./features/Pages/platform/platform')
        .then(m => m.Platform),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./features/Pages/features/features')
        .then(m => m.Features),
  },
  {
    path: 'benefits',
    loadComponent: () =>
      import('./features/Pages/benefits/benefits')
        .then(m => m.Benefits),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/Pages/contact-us/contact-us')
        .then(m => m.ContactUs),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/Pages/about-us/about-us')
        .then(m => m.AboutUs),
  },


  {
  path: 'request-a-demo',
  loadComponent: () =>
    import('./features/Pages/request-a-demo/request-a-demo')
      .then(m => m.RequestADemo ),
},


{
  path: 'login',
  loadComponent: () =>
    import('./features/Pages/login-component/login-component')
      .then(m => m.LoginComponent),
},


  {
    path: '**',
    redirectTo: '',
  },
];