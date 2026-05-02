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

  marqueeItems1: string[] = [];
  marqueeItems2: string[] = [];

  get repeated1(): string[] {
    return [...this.marqueeItems1, ...this.marqueeItems1];
  }

  get repeated2(): string[] {
    return [...this.marqueeItems2, ...this.marqueeItems2];
  }

  ngOnInit(): void {
    this.marqueeItems1 = this.contentService.getMarqueeItems1();
    this.marqueeItems2 = this.contentService.getMarqueeItems2();
  }
}