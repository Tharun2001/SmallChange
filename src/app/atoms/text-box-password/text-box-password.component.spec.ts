import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxPasswordComponent } from './text-box-password.component';

describe('TextBoxPasswordComponent', () => {
  let component: TextBoxPasswordComponent;
  let fixture: ComponentFixture<TextBoxPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBoxPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
