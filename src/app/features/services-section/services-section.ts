// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-services-section',
//   imports: [],
//   templateUrl: './services-section.html',
//   styleUrl: './services-section.scss',
// })
// export class ServicesSection {}
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../core/services/content-service';
import { ServiceCard } from '../../core/models/content';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.html',
  styleUrls: ['./services-section.scss'],
})
export class ServicesSectionComponent implements OnInit {
  private contentService = inject(ContentService);
  services: ServiceCard[] = [];
  activeIndex = 0;

  ngOnInit(): void {
    this.services = this.contentService.getServiceCards();
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }
}