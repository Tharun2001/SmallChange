import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondPortfolioComponent } from './bond-portfolio.component';

describe('BondPortfolioComponent', () => {
  let component: BondPortfolioComponent;
  let fixture: ComponentFixture<BondPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BondPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
