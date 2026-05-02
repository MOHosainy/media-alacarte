
import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NavbarComponent } from '../navbar-component/navbar-component';
import { HeroComponent } from '../hero-component/hero-component';
import { MarqueeComponent } from '../marquee-component/marquee-component';
import { SolutionsComponent } from '../solutions-component/solutions-component';
import { CollaborateComponent } from '../collaborate-component/collaborate-component';
// import { CtaComponent } from '../cta-component/cta-component';
import { FooterComponent } from '../footer-component/footer-component';
import { ServicesSectionComponent } from '../services-section/services-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // NavbarComponent,
    NavbarComponent,
    HeroComponent,
    MarqueeComponent,
    SolutionsComponent,
    CollaborateComponent,
    ServicesSectionComponent,
    FooterComponent
    // HeroComponent,
    // MarqueeComponent
    // ServicesSectionComponent,
    // SolutionsComponent,
    // CollaborateComponent,
    
    // CtaComponent,
    // FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-marquee />
      <app-services-section />
      <app-solutions />
      <app-collaborate />
    </main>
    <app-footer />
  `,
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Scroll-reveal for elements with class "reveal"
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal')
            .forEach(el => observer.observe(el));
  }
}