import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDarkComponent } from './table-dark.component';

describe('TableDarkComponent', () => {
  let component: TableDarkComponent;
  let fixture: ComponentFixture<TableDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
