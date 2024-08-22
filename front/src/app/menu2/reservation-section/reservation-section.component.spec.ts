import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSectionComponent } from './reservation-section.component';

describe('ReservationSectionComponent', () => {
  let component: ReservationSectionComponent;
  let fixture: ComponentFixture<ReservationSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationSectionComponent]
    });
    fixture = TestBed.createComponent(ReservationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
