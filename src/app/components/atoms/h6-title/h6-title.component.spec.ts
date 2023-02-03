import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H6TitleComponent } from './h6-title.component';

describe('H6TitleComponent', () => {
  let component: H6TitleComponent;
  let fixture: ComponentFixture<H6TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H6TitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H6TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
