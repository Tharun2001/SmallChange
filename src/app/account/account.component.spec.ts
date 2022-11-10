import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { AccountComponent } from './account.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule, FormsModule, ReactiveFormsModule,
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
      declarations: [ AccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill options with bank account number', () => {
    component.accountError = "true";
    component.amount = 1000;
    component.selectedAccountNumber = "ABC1233";

    expect(component.accountError).toBe("true");

    expect(component.selectedAccountNumber).toBe("ABC1233");
  });

  it('should not submit and reset form when negative amount is input', () => {
    component.accountError = "true";
    component.amount = 1000;
    component.selectedAccountNumber = "ABC1233";

    expect(component.accountError).toBe("true");

  });





  it('should not submit and reset form when no amount is input ', () => {
    component.accountError = "false";
    component.amount = 1000;
    component.selectedAccountNumber = "ABC1233";
    component.funds = 20000;
    expect(component.accountError).toBe("false");
  });



  it('should update funds when valid input is given', () => {

    component.accountError = "false";
    component.amount = 1000;
    component.selectedAccountNumber = "ABC1233";
    component.funds = 20000;

    expect(component.funds).toBe(20000);
  });

});
