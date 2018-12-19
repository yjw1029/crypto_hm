import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmContainerComponent } from './atm-container.component';

describe('AtmContainerComponent', () => {
  let component: AtmContainerComponent;
  let fixture: ComponentFixture<AtmContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
