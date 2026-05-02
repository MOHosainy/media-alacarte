// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-collaborate-component',
//   imports: [],
//   templateUrl: './collaborate-component.html',
//   styleUrl: './collaborate-component.scss',
// })
// export class CollaborateComponent {}
import { Component, OnInit, AfterViewInit, inject, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../core/services/content-service';
import { StatItem, TeamMember } from '../../core/models/content';
import { ButtonComponent } from '../../shared/components/button/button';

@Component({
  selector: 'app-collaborate',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './collaborate-component.html',
  styleUrls: ['./collaborate-component.scss'],
})
export class CollaborateComponent implements OnInit, AfterViewInit {
  private contentService = inject(ContentService);

  stats: StatItem[]     = [];
  members: TeamMember[] = [];

  @ViewChildren('statEl') statEls!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.stats   = this.contentService.getStats();
    this.members = this.contentService.getTeamMembers();
  }

  ngAfterViewInit(): void {
    // Animate stat numbers when in viewport
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('counted');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.5 }
    );
    this.statEls.forEach(el => observer.observe(el.nativeElement));
  }
}