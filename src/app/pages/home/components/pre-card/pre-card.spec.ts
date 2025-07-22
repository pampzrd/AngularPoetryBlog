import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCard } from './pre-card';

describe('PreCard', () => {
  let component: PreCard;
  let fixture: ComponentFixture<PreCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
