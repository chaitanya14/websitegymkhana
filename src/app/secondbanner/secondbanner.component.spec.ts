import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondbannerComponent } from './secondbanner.component';

describe('SecondbannerComponent', () => {
  let component: SecondbannerComponent;
  let fixture: ComponentFixture<SecondbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
