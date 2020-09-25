import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconUpdateComponent } from './icon-update.component';

describe('IconUpdateComponent', () => {
  let component: IconUpdateComponent;
  let fixture: ComponentFixture<IconUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
