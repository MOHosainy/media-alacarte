// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-button',
//   imports: [],
//   templateUrl: './button.html',
//   styleUrl: './button.scss',
// })
// export class Button {}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Reusable button with variant support */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="'btn btn--' + variant"
      [type]="type"
      (click)="clicked.emit()">
      <ng-content />
    </button>
  `,
  styleUrls: ['./button.scss'],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'outline' | 'ghost' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Output() clicked = new EventEmitter<void>();
}