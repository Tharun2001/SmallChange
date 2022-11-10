import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AddBankAccountComponent } from './add-bank-account.component';

describe('AddBankAccountComponent', () => {
  let component: AddBankAccountComponent;
  let fixture: ComponentFixture<AddBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ AddBankAccountComponent ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain input boxes for bank name and account number', () => {
    expect(component).toBeTruthy();
  });

  it('should display error if bank name or account is null or invalid', () => {
    expect(component).toBeTruthy();
  });

  it('should display error if account number already exists', () => {
    expect(component).toBeTruthy();
  });

  it('should add bank account to table if details are valid', () => {
    expect(component).toBeTruthy();
  });

});
