import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadEditComponent } from './bread-edit.component';

describe('BreadEditComponent', () => {
  let component: BreadEditComponent;
  let fixture: ComponentFixture<BreadEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadEditComponent]
    });
    fixture = TestBed.createComponent(BreadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
