import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfPortfolioComponent } from './mf-portfolio.component';

describe('MfPortfolioComponent', () => {
  let component: MfPortfolioComponent;
  let fixture: ComponentFixture<MfPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display table', () => {
    const compiled = fixture.debugElement.nativeElement;
    const table = compiled.querySelector("table");
    expect(table).toBeTruthy();
  });
});
