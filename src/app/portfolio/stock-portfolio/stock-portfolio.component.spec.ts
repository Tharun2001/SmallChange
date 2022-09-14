import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockHolding } from 'src/app/models/stock-holding';

import { StockPortfolioComponent } from './stock-portfolio.component';

const mockStocks: StockHolding[] = [
  { name: 'Apple Inc', code: 'AAPL', quantity: 100, buy_price: 155.34, LTP: 154.29, asset_class:"Main index stocks" },
  { name: 'Tesla Inc', code: 'TSLA', quantity: 20, buy_price: 657.65, LTP: 733.8, asset_class:"Main index stocks"}
];
describe('StockPortfolioComponent', () => {
  let component: StockPortfolioComponent;
  let fixture: ComponentFixture<StockPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPortfolioComponent);
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
