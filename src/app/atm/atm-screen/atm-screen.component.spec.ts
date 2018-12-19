import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmScreenComponent } from './atm-screen.component';

describe('AtmScreenComponent', () => {
  let component: AtmScreenComponent;
  let fixture: ComponentFixture<AtmScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
