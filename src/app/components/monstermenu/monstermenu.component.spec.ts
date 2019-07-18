import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstermenuComponent } from './monstermenu.component';

describe('MonstermenuComponent', () => {
  let component: MonstermenuComponent;
  let fixture: ComponentFixture<MonstermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
