import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftHeaderComponent } from './left-header.component';

describe('LeftHeaderComponent', () => {
  let component: LeftHeaderComponent;
  let fixture: ComponentFixture<LeftHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftHeaderComponent]
    });
    fixture = TestBed.createComponent(LeftHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
