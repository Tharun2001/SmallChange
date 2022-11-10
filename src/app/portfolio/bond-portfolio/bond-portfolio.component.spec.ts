import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BondPortfolioComponent } from './bond-portfolio.component';

describe('BondPortfolioComponent', () => {
  let component: BondPortfolioComponent;
  let fixture: ComponentFixture<BondPortfolioComponent>;
  const data = [{sid: 1, code: 'ABC', name: 'Stock', 'asset_class': "Government bonds",
  'ltp': 100, 'quantity': 10, 'invested_amount': 1000}];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatSnackBarModule, HttpClientTestingModule],
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
  it('should display table', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.data = data;
    fixture.detectChanges();
    const table = compiled.querySelector("table");
    expect(table).toBeTruthy();
  });
});
