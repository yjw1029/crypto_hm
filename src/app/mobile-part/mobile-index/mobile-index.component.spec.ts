import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileIndexComponent } from './mobile-index.component';

describe('MobileIndexComponent', () => {
  let component: MobileIndexComponent;
  let fixture: ComponentFixture<MobileIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
