import { Component, inject } from '@angular/core';
import { ContentService } from '../../../core/services/content-service';

@Component({
  selector: 'app-contact-us',
  imports: [],
  standalone: true,
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.scss'],
})
export class ContactUs {

  private contentService = inject(ContentService);

  contactInfo = this.contentService.getContactInfo();

}