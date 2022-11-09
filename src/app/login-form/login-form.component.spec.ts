import { style } from '@angular/animations';
import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { LoginFormComponent } from './login-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [
        FormsModule, HttpClientTestingModule, RouterTestingModule
      ]
    })
      .overrideComponent(LoginFormComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
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

  it('invalid username', () => {
    component.username = 'a';
    const user = fixture.debugElement.query(By.css('input#username'));
    user.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    const userError = fixture.debugElement.query(By.css('div#usernameError'));
    expect(userError.styles['display']).toBe('block');
  });

  it('valid username', () => {
    component.username = 'aaaaaa';
    const user = fixture.debugElement.query(By.css('input#username'));
    user.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    const userError = fixture.debugElement.query(By.css('div#usernameError'));
    expect(userError.styles['display']).toBe('none');
  });

  it('invalid password', () => {
    component.password = 'a';
    const password = fixture.debugElement.query(By.css('input#password'));
    password.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const passError = fixture.debugElement.query(By.css('div#passwordError'));
    console.log(passError.styles['display']);
    expect(passError.styles['display']).toBe('block');
  });

  it('valid password', () => {
    component.password = 'aaaaaaaaa';
    const password = fixture.debugElement.query(By.css('input#password'));
    password.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    const passError = fixture.debugElement.query(By.css('div#passwordError'));
    expect(passError.styles['display']).toBe('none');
  });

  it('invalid username length', () => {
    component.username =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    const user = fixture.debugElement.query(By.css('input#username'));
    user.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    const userError = fixture.debugElement.query(By.css('div#usernameError'));
    expect(userError.styles['display']).toBe('block');
  });

  it('invalid username characters', () => {
    component.username = 'a##a';
    const user = fixture.debugElement.query(By.css('input#username'));
    user.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    const userError = fixture.debugElement.query(By.css('div#usernameError'));
    expect(userError.styles['display']).toBe('block');
  });

  it('invalid password length', () => {
    component.password = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    const password = fixture.debugElement.query(By.css('input#password'));
    password.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const passError = fixture.debugElement.query(By.css('div#passwordError'));
    console.log(passError.styles['display']);
    expect(passError.styles['display']).toBe('block');
  });

  it('invalid password characters', () => {
    component.password = 'a#$a';
    const password = fixture.debugElement.query(By.css('input#password'));
    password.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const passError = fixture.debugElement.query(By.css('div#passwordError'));
    console.log(passError.styles['display']);
    expect(passError.styles['display']).toBe('block');
  });
});
