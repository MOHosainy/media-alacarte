// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-marquee-component',
//   imports: [],
//   templateUrl: './marquee-component.html',
//   styleUrl: './marquee-component.scss',
// })
// export class MarqueeComponent {}
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../core/services/content-service';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee-component.html',
  styleUrls: ['./marquee-component.scss'],
})
export class MarqueeComponent implements OnInit {
  private contentService = inject(ContentService);
  items: string[] = [];
  /** Duplicate items for seamless infinite scroll */
  get repeated(): string[] {
    return [...this.items, ...this.items];
  }

  ngOnInit(): void {
    this.items = this.contentService.getMarqueeItems();
  }
}