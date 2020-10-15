import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecapOrderComponent } from './page-recap-order.component';

describe('PageRecapOrderComponent', () => {
  let component: PageRecapOrderComponent;
  let fixture: ComponentFixture<PageRecapOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRecapOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecapOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
