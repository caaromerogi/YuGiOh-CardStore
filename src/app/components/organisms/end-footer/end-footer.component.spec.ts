import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndFooterComponent } from './end-footer.component';

describe('EndFooterComponent', () => {
  let component: EndFooterComponent;
  let fixture: ComponentFixture<EndFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
