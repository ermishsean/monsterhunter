import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificmonsterComponent } from './specificmonster.component';

describe('SpecificmonsterComponent', () => {
  let component: SpecificmonsterComponent;
  let fixture: ComponentFixture<SpecificmonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificmonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificmonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
