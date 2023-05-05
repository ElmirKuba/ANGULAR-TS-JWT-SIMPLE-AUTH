import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarContentComponent } from './left-sidebar-content.component';

describe('LeftSidebarContentComponent', () => {
  let component: LeftSidebarContentComponent;
  let fixture: ComponentFixture<LeftSidebarContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSidebarContentComponent]
    });
    fixture = TestBed.createComponent(LeftSidebarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
