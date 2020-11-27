import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashMenuComponent } from './splash-menu.component';

describe('SplashMenuComponent', () => {
  let component: SplashMenuComponent;
  let fixture: ComponentFixture<SplashMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
