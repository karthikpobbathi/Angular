import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMyShowComponent } from './book-my-show.component';

describe('BookMyShowComponent', () => {
  let component: BookMyShowComponent;
  let fixture: ComponentFixture<BookMyShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMyShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMyShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
