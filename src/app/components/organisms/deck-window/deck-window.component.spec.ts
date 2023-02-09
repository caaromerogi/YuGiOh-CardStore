import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckWindowComponent } from './deck-window.component';

describe('DeckWindowComponent', () => {
  let component: DeckWindowComponent;
  let fixture: ComponentFixture<DeckWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
