import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StockPortfolioComponent } from './stock-portfolio.component';

describe('StockPortfolioComponent', () => {
  let component: StockPortfolioComponent;
  let fixture: ComponentFixture<StockPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatSnackBarModule, HttpClientTestingModule],
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
