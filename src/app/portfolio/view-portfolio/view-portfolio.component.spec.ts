import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPortfolioComponent } from './view-portfolio.component';

describe('ViewPortfolioComponent', () => {
  let component: ViewPortfolioComponent;
  let fixture: ComponentFixture<ViewPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render holdings overall details', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".overview").textContent).toContain('Total Investment:');
    expect(compiled.querySelector(".overview").textContent).toContain('Current Value:');
    expect(compiled.querySelector(".overview").textContent).toContain('Net Profit/Loss');
  })


});
