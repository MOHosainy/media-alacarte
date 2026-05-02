import { Component, inject } from '@angular/core';
import { ContentService } from '../../../core/services/content-service';

@Component({
  selector: 'app-platform',
  standalone: true,
  templateUrl: './platform.html',
  styleUrls: ['./platform.scss'],
})
export class Platform {

  private contentService = inject(ContentService);

  platform = this.contentService.getPlatformData();
}