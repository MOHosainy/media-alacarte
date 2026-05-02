import { Component, inject } from '@angular/core';
import { ContentService } from '../../../core/services/content-service';

@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.html',
  styleUrls: ['./features.scss'],
})
export class Features {

  private contentService = inject(ContentService);

  features = this.contentService.getFeaturesData();
}