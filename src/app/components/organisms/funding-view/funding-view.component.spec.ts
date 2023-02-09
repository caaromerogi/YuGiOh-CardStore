import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingViewComponent } from './funding-view.component';

describe('FundingViewComponent', () => {
  let component: FundingViewComponent;
  let fixture: ComponentFixture<FundingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
