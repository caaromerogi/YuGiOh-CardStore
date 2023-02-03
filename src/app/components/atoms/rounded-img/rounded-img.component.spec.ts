import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedImgComponent } from './rounded-img.component';

describe('RoundedImgComponent', () => {
  let component: RoundedImgComponent;
  let fixture: ComponentFixture<RoundedImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundedImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundedImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
