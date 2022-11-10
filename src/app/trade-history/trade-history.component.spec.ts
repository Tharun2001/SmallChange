import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgControl, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TradeStock } from '../models/trade-stock';
import { TradeHistoryComponent } from './trade-history.component';


describe('TradeHistoryComponent', () => {
  let component: TradeHistoryComponent;
  let fixture: ComponentFixture<TradeHistoryComponent>;
  const trades: TradeStock[] = [{name: "ABC" , code: "ABC", price: 100, asset_class: "Main Index", 
  quantity: 10, trade_type: "B", date: "2022-11-10T09:33:15"}, 
  {name: "XYC" , code: "XYC", price: 200, asset_class: "Government bonds", 
  quantity: 10, trade_type: "S", date: "2022-12-10T09:33:15"}]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeHistoryComponent ],
      imports: [FormsModule, HttpClientTestingModule, 
        NoopAnimationsModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule],
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

  it('should display prompt when no transactions available', () => {
    component.fullTrades = trades;
    component.selectedAssetClasses = ["Government bonds"];
    component.assetClassList = []
    
    
    
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });

  it('should not display based on asset classes when asset filter not chosen', () => {
    component.fullTrades = trades;
    component.selectedAssetClasses = ["Government bonds"];
    component.assetClassList = []
    
    
    
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });

  it('should display based on asset classes - Bonds', () => {
    component.fullTrades = trades;
    component.selectedAssetClasses = ["Government bonds"];
    component.assetClassList = []
    
    
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });


  it('should display based on asset classes - Stocks', () => {
    component.fullTrades = trades;
    component.selectedAssetClasses = ["Main Index"];
    component.assetClassList = []
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });

  it('should not display based on side when side filter not chosen', () => {
    component.fullTrades = trades;
    component.selectedAssetClasses = ["Government bonds"];
    component.assetClassList = []
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });

  it('should display based on side filter - Buy', () => {
    component.fullTrades = trades;
    component.selectedSide = "B";

    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });

  it('should display based on side filter - Sell', () => {
    component.fullTrades = trades;
    component.selectedSide = "S";

    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });


  it('should not display based on side filter when side not chosen', () => {
    component.fullTrades = trades;
    component.selectedSide = "S";

    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });

  it('should display based on date filter', () => {
    component.fullTrades = trades;
    component.selectedSide = "S";

    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });


  
  it('should not display based on date filter when not chosen', () => {
    component.fullTrades = trades;
    component.selectedSide = "S";

    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });

  it('should display based on amount filter', () => {
    component.fullTrades = trades;
    component.stAmount = 1500;
    component.endAmount = 2000;
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });

  it('should not display based on amount filter when not chosen', () => {
    component.fullTrades = trades;
    component.selectedSide = "S";

    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(1);
  });
  
  it('should not apply filter when invalid amount  range in valid display', () => {
    component.fullTrades = trades;
    component.stAmount = 3000;
    component.endAmount = 2000;
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(2);
  });

  it('should apply all filters', () => {
    component.fullTrades = trades;
    component.stAmount = 3000;
    component.endAmount = 2000;
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.trades.length).toBe(2);
  });

});
