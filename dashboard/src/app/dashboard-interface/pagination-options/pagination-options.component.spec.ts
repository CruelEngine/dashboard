import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginationOptionsComponent } from './pagination-options.component';

describe('PaginationOptionsComponent', () => {
  let component: PaginationOptionsComponent;
  let fixture: ComponentFixture<PaginationOptionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
