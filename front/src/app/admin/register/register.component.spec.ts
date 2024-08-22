import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponenet } from './register.component';

describe('RegisterComponenet', () => {
  let component: RegisterComponenet;
  let fixture: ComponentFixture<RegisterComponenet>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponenet]
    });
    fixture = TestBed.createComponent(RegisterComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
