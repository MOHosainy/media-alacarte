import { Component } from '@angular/core';
import { ContentService } from '../../../core/services/content-service';

@Component({
  selector: 'app-request-a-demo',
  standalone: true,
  templateUrl: './request-a-demo.html',
  styleUrls: ['./request-a-demo.scss'],
})
export class RequestADemo {

  demoData: any;

  constructor(private contentService: ContentService) {
    this.demoData = this.contentService.getDemoData();
  }
}