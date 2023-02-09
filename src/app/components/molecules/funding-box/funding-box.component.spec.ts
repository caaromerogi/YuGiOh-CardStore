import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingBoxComponent } from './funding-box.component';

describe('FundingBoxComponent', () => {
  let component: FundingBoxComponent;
  let fixture: ComponentFixture<FundingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundingBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
