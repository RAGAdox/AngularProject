import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepermentsComponent } from './deperments.component';

describe('DepermentsComponent', () => {
  let component: DepermentsComponent;
  let fixture: ComponentFixture<DepermentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepermentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepermentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
