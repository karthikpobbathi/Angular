import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab21Component } from './lab21.component';

describe('Lab21Component', () => {
  let component: Lab21Component;
  let fixture: ComponentFixture<Lab21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
