
// import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
// import { NavbarComponent } from '../navbar-component/navbar-component';
// import { HeroComponent } from '../hero-component/hero-component';
// import { MarqueeComponent } from '../marquee-component/marquee-component';
// import { SolutionsComponent } from '../solutions-component/solutions-component';
// import { CollaborateComponent } from '../collaborate-component/collaborate-component';
// // import { CtaComponent } from '../cta-component/cta-component';
// import { FooterComponent } from '../footer-component/footer-component';
// import { ServicesSectionComponent } from '../services-section/services-section';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [
//     // NavbarComponent,
//     NavbarComponent,
//     HeroComponent,
//     MarqueeComponent,
//     SolutionsComponent,
//     CollaborateComponent,
//     ServicesSectionComponent,
//     FooterComponent
   
//   ],
//   template: `
//     <app-navbar />
//     <main>
//       <app-hero />
//       <app-marquee />
//       <app-services-section />
//       <app-solutions />
//       <app-collaborate />
//     </main>
//     <app-footer />
//   `,
// })
// export class HomeComponent implements AfterViewInit {
//   ngAfterViewInit(): void {
//     // Scroll-reveal for elements with class "reveal"
//     const observer = new IntersectionObserver(
//       entries => entries.forEach(e => {
//         if (e.isIntersecting) {
//           e.target.classList.add('visible');
//           observer.unobserve(e.target);
//         }
//       }),
//       { threshold: 0.12 }
//     );
//     document.querySelectorAll('.reveal')
//             .forEach(el => observer.observe(el));
//   }
// }





import {
  Component,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

import { NavbarComponent } from '../navbar-component/navbar-component';
import { HeroComponent } from '../hero-component/hero-component';
import { MarqueeComponent } from '../marquee-component/marquee-component';
import { SolutionsComponent } from '../solutions-component/solutions-component';
import { CollaborateComponent } from '../collaborate-component/collaborate-component';
import { FooterComponent } from '../footer-component/footer-component';
import { ServicesSectionComponent } from '../services-section/services-section';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    NavbarComponent,
    HeroComponent,
    MarqueeComponent,
    ServicesSectionComponent,
    SolutionsComponent,
    CollaborateComponent,
    FooterComponent,
  ],

  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.initializeScrollReveal();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private initializeScrollReveal(): void {

    const revealElements =
      document.querySelectorAll('.reveal');

    this.observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            this.observer?.unobserve(entry.target);
          }
        });

      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((element) => {
      this.observer?.observe(element);
    });
  }
}