import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestADemo } from './request-a-demo';

describe('RequestADemo', () => {
  let component: RequestADemo;
  let fixture: ComponentFixture<RequestADemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestADemo],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestADemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
