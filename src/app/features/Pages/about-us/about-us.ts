import { Component, inject } from '@angular/core';
import { ContentService } from '../../../core/services/content-service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.scss'],
})
export class AboutUs {

  private contentService = inject(ContentService);

  about = this.contentService.getAboutData();
}