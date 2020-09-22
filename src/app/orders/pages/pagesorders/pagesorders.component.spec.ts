import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesordersComponent } from './pagesorders.component';

describe('PagesordersComponent', () => {
  let component: PagesordersComponent;
  let fixture: ComponentFixture<PagesordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
