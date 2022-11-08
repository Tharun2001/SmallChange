import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TradeHistoryComponent } from './trade-history.component';


describe('TradeHistoryComponent', () => {
  let component: TradeHistoryComponent;
  let fixture: ComponentFixture<TradeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeHistoryComponent ],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve trade records when all trades is selected', ()=> {
    component.getTradeHistory('');
    expect(component.trades.length).toBeGreaterThan(0);
  })

  // it('should display only main index asset trades', ()=> {
  //   let beforeData = component.trades;
  //   component.getTradeHistory('asset_class');
  //   component.onAssetOptionSelection('Main index stocks');
  //   expect(component.trades.length).toBe(7);
  // })

  // it('should display only small cap trades', ()=> {
  //   component.getTradeHistory('asset_class');
  //   component.onAssetOptionSelection('Small cap company stocks');
  //   expect(component.trades.length).toBe(7);
  // })

  // it('should display only International market stocks', ()=> {
  //   component.getTradeHistory('asset_class');
  //   component.onAssetOptionSelection('International market stocks');
  //   expect(component.trades.length).toBe(2);
  // })
  
  // it('should display only SELL trades', ()=> {
  //   let beforeData = component.trades;
  //   component.getTradeHistory('side');
  //   component.onAssetOptionSelection('sell')
  //   expect(component.trades.length).toBeLessThan(beforeData.length);
  // })

  // it('should display only BUY trades', ()=> {
  //   let beforeData = component.trades;
  //   component.getTradeHistory('side');
  //   component.onAssetOptionSelection('buy')
  //   expect(component.trades.length).toBeLessThan(beforeData.length);
  // })

  // it('should display error when date is invalid', ()=> {
  //   let form: NgForm = new NgForm([], []);
  //   component.getTradeHistory('date');
  //   component.endDate = '';
  //   component.stDate = '';
  //   component.dateSubmit(form);
  //   fixture.detectChanges();
  //   const error = fixture.debugElement.query(By.css('div.error'));
  //   expect(error).toBeTruthy();
  // })

  // it('should display trades between specified date when dates are valid', ()=> {
  //   let form: NgForm = new NgForm([], []);
  //   component.getTradeHistory('amount');
  //   component.endDate = '10/08/2022';
  //   component.stDate = '10/06/2022';
  //   component.dateSubmit(form);
  //   fixture.detectChanges();
  //   const error = fixture.debugElement.query(By.css('div.error'));
  //   expect(error).toBeFalsy();
  // })

  // it('should display error when amount is invalid', ()=> {
  //   let form: NgForm = new NgForm([], []);
  //   component.getTradeHistory('amount');
  //   component.endAmount = '';
  //   component.stAmount = '';
  //   component.amountSubmit();
  //   fixture.detectChanges();
  //   const error = fixture.debugElement.query(By.css('div.error'));
  //   expect(error).toBeTruthy();
  // })

  // it('should display trades between specified amount when amounts are valid', ()=> {
  //   let form: NgForm = new NgForm([], []);
  //   component.getTradeHistory('amount');
  //   component.endAmount = '100';
  //   component.stAmount = '0';
  //   component.amountSubmit();
  //   fixture.detectChanges();
  //   const error = fixture.debugElement.query(By.css('div.error'));
  //   expect(error).toBeFalsy();
  // })

});
