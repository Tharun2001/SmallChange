import { style } from '@angular/animations';
import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ]
    })
    .overrideComponent(LoginFormComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error div when username is invalid', () => {
    var username = fixture.debugElement.query(By.css('username')).nativeElement;
    username.value = 'asdasd';
    username.dispatchEvent(new Event('change'));

    fixture.detectChanges();
    console.log(fixture.detectChanges())

    var divError = fixture.debugElement.query(By.css('usernameError'));


    expect(divError.styles['display']).toBe('block');
  });
});
