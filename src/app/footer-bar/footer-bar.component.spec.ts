import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBarComponent } from './footer-bar.component';

describe('FooterBarComponent', () => {
  let component: FooterBarComponent;
  let fixture: ComponentFixture<FooterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain footer element', () => {
    const compiled = fixture.debugElement.nativeElement;
    const footer = compiled.querySelector('footer');
    expect(footer).toBeTruthy();
  });
});
