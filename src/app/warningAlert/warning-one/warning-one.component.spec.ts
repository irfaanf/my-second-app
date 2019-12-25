import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningOneComponent } from './warning-one.component';

describe('WarningOneComponent', () => {
  let component: WarningOneComponent;
  let fixture: ComponentFixture<WarningOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
