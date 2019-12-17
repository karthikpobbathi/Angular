import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab42Component } from './lab42.component';

describe('Lab42Component', () => {
  let component: Lab42Component;
  let fixture: ComponentFixture<Lab42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
