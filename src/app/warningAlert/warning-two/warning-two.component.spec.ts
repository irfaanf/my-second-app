import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningTwoComponent } from './warning-two.component';

describe('WarningTwoComponent', () => {
  let component: WarningTwoComponent;
  let fixture: ComponentFixture<WarningTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
