// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hero-component',
//   imports: [],
//   templateUrl: './hero-component.html',
//   styleUrl: './hero-component.scss',
// })
// export class HeroComponent {}


import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero-component.html',
  styleUrls: ['./hero-component.scss'],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;

  ngAfterViewInit(): void {
    // Staggered entrance animation via CSS classes
    const el = this.heroSection.nativeElement;
    setTimeout(() => el.classList.add('hero--visible'), 100);
  }
}