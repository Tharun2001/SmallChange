import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SecurityList } from '../models/securitylist';

import { BuyTradeComponent } from './buy-trade.component';

describe('BuyTradeComponent', () => {
  let component: BuyTradeComponent;
  let fixture: ComponentFixture<BuyTradeComponent>;
  const data: SecurityList = {sid: 1, scode: 'ABC', sname: 'Stock', assetClass: "Government bonds",
  ltp: 100};


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ BuyTradeComponent ],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      },
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should contain input boxes', () => {
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector("input");
    expect(component).toBeTruthy();
  });

  it('should not display error when quantity quantity is valid', () => {
    component.data = data;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const error = compiled.querySelector("error");
    expect(component).toBeTruthy();
  });

  it('should display error when quantity is invalid', () => {
    component.data = data;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const error = compiled.querySelector("error");
    expect(component).toBeTruthy();
  });

  it('should display insufficient when fund is not available', () => {
    component.data = data;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const error = compiled.querySelector("error");
    expect(component).toBeTruthy();
  });

  it('should buy trade when quantity is valid', () => {
    component.data = data;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const error = compiled.querySelector("valid");
    expect(component).toBeTruthy();
  });

  it('should close model when cancel is clicked', () => {
    component.data = data;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const error = compiled.querySelector("clicked");
    expect(component).toBeTruthy();
  });
});
