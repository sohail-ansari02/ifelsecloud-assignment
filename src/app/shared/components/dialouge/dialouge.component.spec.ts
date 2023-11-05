import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialougeComponent } from './dialouge.component';

describe('DialougeComponent', () => {
  let component: DialougeComponent;
  let fixture: ComponentFixture<DialougeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialougeComponent]
    });
    fixture = TestBed.createComponent(DialougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
