// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cta-component',
//   imports: [],
//   templateUrl: './cta-component.html',
//   styleUrl: './cta-component.scss',
// })
// export class CtaComponent {}
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './cta-component.html',
  styleUrls: ['./cta-component.scss'],
})
export class CtaComponent {}