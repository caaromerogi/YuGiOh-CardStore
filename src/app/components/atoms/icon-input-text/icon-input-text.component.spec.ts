import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconInputTextComponent } from './icon-input-text.component';

describe('IconInputTextComponent', () => {
  let component: IconInputTextComponent;
  let fixture: ComponentFixture<IconInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconInputTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
