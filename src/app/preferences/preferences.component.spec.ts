import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Preference } from '../models/preference';
import { PreferencesComponent } from './preferences.component';
import { PreferenceService } from './preference.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('PreferencesComponent', () => {
  let component: PreferencesComponent;
  let fixture: ComponentFixture<PreferencesComponent>;
  let mockPreferenceService: any;
  beforeEach(async () => {
    let mockPreference: Preference = {"username": 'Test1', "risk": 5, "purpose": "Testing", "incomeCategory": "150,000+", "lengthOfInvestment": "15+ years"};
    mockPreferenceService = jasmine.createSpyObj(['getPreference', 'setPreference'])

    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ PreferencesComponent ],
      providers:
      [{
        provide: MatDialogRef,
        useValue: {}
      },
      {
        provide: PreferenceService, useValue: mockPreferenceService
      }
    ]
    })
    .compileComponents();

    mockPreferenceService.getPreference.and.returnValue(of(mockPreference));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch Preferences from service' , () => {
    component.getPreference();
    expect(component.getPreference.length).toBe(0);
  });

  it('should contain 2 inputs' , () => {
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    expect(inputs.length).toBe(2);
  });

  it('should have the form disabled by default' , () => {
    expect(component.preferencesForm.disabled).toBeTruthy();
  });
  it('should enable form on clicking edit button' , () => {
    let editBtton = fixture.nativeElement.querySelector('#editPreferencesBtn1');
    editBtton.click();
    fixture.detectChanges();
    expect(component.preferencesForm.disabled).toBeFalsy();
  });

  it('should contain 2 dropdowns' , () => {
    const inputs = fixture.debugElement.queryAll(By.css('select'));
    expect(inputs.length).toBe(2);
  });

  it('should have save button disabled by default' , () => {
    expect(fixture.nativeElement.querySelector('#editPreferencesBtn').disabled).toBeTruthy();
  });

  it('should have edit button enabled by default' , () => {
    expect(fixture.nativeElement.querySelector('#editPreferencesBtn1').disabled).toBeFalsy();
  });

  it('should disable edit button on click' , () => {
    let editBtton = fixture.nativeElement.querySelector('#editPreferencesBtn1');
    editBtton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#editPreferencesBtn1').disabled).toBeTruthy();
  });

  it('should enable save button on edit button click' , () => {
    expect(fixture.nativeElement.querySelector('#editPreferencesBtn').disabled).toBeTruthy();
    let editBtton = fixture.nativeElement.querySelector('#editPreferencesBtn1');
    editBtton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#editPreferencesBtn').disabled).toBeFalsy();
  });


  it('should have 12 options in total for income category and length of investment' , () => {
    let dropdown = fixture.debugElement.queryAll(By.css('option'));
    expect(dropdown.length).toBe(12);
  });
});
