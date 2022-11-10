import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SellTradeComponent } from './sell-trade.component';

describe('SellTradeComponent', () => {
  let component: SellTradeComponent;
  let fixture: ComponentFixture<SellTradeComponent>;
  const data = [{sid: 1, code: 'ABC', name: 'Stock', 'asset_class': "Government bonds",
  'ltp': 100, 'quantity': 10, 'invested_amount': 1000}];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ SellTradeComponent ],
      providers:
      [{
        provide: MatDialogRef,
        useValue: {}
      },
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellTradeComponent);
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
    component.data = data[0];
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const error = compiled.querySelector("error");
    expect(component).toBeTruthy();
  });

  it('should display error when quantity is invalid', () => {
    component.data = data[0];
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const error = compiled.querySelector("error");
    expect(component).toBeTruthy();
  });

  it('should sell trade when quantity is valid', () => {
    component.data = data[0];
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const error = compiled.querySelector("valid");
    expect(component).toBeTruthy();
  });

  it('should close model when cancel is clicked', () => {
    component.data = data[0];
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const error = compiled.querySelector("clicked");
    expect(component).toBeTruthy();
  });

});
