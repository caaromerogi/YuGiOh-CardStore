import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputControlFormComponent } from './input-control-form.component';

describe('InputControlFormComponent', () => {
  let component: InputControlFormComponent;
  let fixture: ComponentFixture<InputControlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputControlFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputControlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
