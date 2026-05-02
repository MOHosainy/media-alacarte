// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-solutions-component',
//   imports: [],
//   templateUrl: './solutions-component.html',
//   styleUrl: './solutions-component.scss',
// })
// export class SolutionsComponent {}


import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../core/services/content-service';
import { SolutionCard } from '../../core/models/content';
import { ButtonComponent } from '../../shared/components/button/button';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './solutions-component.html',
  styleUrls: ['./solutions-component.scss'],
})
export class SolutionsComponent implements OnInit {
  private contentService = inject(ContentService);
  solutions: SolutionCard[] = [];

  ngOnInit(): void {
    this.solutions = this.contentService.getSolutionCards();
  }
}