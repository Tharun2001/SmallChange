import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxStandardComponent } from './text-box-standard.component';

describe('TextBoxStandardComponent', () => {
  let component: TextBoxStandardComponent;
  let fixture: ComponentFixture<TextBoxStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBoxStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
