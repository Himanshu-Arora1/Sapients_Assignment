import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSpacexComponent } from './filter-spacex.component';

describe('FilterSpacexComponent', () => {
  let component: FilterSpacexComponent;
  let fixture: ComponentFixture<FilterSpacexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSpacexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSpacexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
