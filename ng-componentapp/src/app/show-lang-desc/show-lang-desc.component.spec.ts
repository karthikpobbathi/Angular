import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLangDescComponent } from './show-lang-desc.component';

describe('ShowLangDescComponent', () => {
  let component: ShowLangDescComponent;
  let fixture: ComponentFixture<ShowLangDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLangDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLangDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
