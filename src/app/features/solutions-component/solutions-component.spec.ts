import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsComponent } from './solutions-component';

describe('SolutionsComponent', () => {
  let component: SolutionsComponent;
  let fixture: ComponentFixture<SolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
