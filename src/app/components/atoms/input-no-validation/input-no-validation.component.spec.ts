import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNoValidationComponent } from './input-no-validation.component';

describe('InputNoValidationComponent', () => {
  let component: InputNoValidationComponent;
  let fixture: ComponentFixture<InputNoValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNoValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNoValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
