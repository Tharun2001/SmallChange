import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 4 navigation items', () => {
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(4);
  })

  it(('should contain nav element'), ()=> {
    const compiled = fixture.debugElement.nativeElement;
    const navbar = compiled.querySelector("nav");
    expect(navbar).toBeTruthy();
  });
});
