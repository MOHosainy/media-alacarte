import { Component, inject } from '@angular/core';
import { ContentService } from '../../../core/services/content-service';

@Component({
  selector: 'app-benefits',
  standalone: true,
  templateUrl: './benefits.html',
  styleUrls: ['./benefits.scss'],
})
export class Benefits {

  private contentService = inject(ContentService);

  benefits = this.contentService.getBenefitsData();
}