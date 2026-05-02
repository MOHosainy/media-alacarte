// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-footer-component',
//   imports: [],
//   templateUrl: './footer-component.html',
//   styleUrl: './footer-component.scss',
// })
// export class FooterComponent {}
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content-service';
import { FooterColumn } from '../../core/models/content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer-component.html',
  styleUrls: ['./footer-component.scss'],
})
export class FooterComponent implements OnInit {
  private contentService = inject(ContentService);
  columns: FooterColumn[] = [];
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.columns = this.contentService.getFooterColumns();
  }
}