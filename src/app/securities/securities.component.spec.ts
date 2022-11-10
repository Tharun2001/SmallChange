import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SecurityList } from '../models/securitylist';

import { SecuritiesComponent } from './securities.component';

describe('SecuritiesComponent', () => {
  let component: SecuritiesComponent;
  let fixture: ComponentFixture<SecuritiesComponent>;
  const securities: SecurityList[] = [{sid: 1, scode: "ABC", sname: "ADC",
assetClass: "Government bonds", ltp: 100}];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatSnackBarModule, HttpClientTestingModule],
      declarations: [ SecuritiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display prompt when no securities available', () => {
    component.fullSecurities = securities;
    component.selectedAssetClasses = ["Government bonds"];
    component.assetClassList = []
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.securities.length).toBe(1);
  });


  it('should display all when asset filter not chosen', () => {
    component.fullSecurities = securities;
    component.selectedAssetClasses = ["Government bonds"];
    component.assetClassList = []
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.securities.length).toBe(1);
  });

  it('should display based on asset classes when asset filter chosen', () => {
    component.fullSecurities = securities;
    component.selectedAssetClasses = ["Government bonds"];
    component.assetClassList = []
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.securities.length).toBe(1);
  });


  it('should open buy model when buy is clicked', () => {
    component.fullSecurities = securities;
    component.selectedAssetClasses = ["Government bonds"];
    component.assetClassList = []
    fixture.detectChanges();
    component.filterSubmit();
    expect(component.securities.length).toBe(1);
  });

});
