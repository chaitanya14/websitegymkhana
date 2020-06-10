import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgimagesliderComponent } from './ngimageslider.component';

describe('NgimagesliderComponent', () => {
  let component: NgimagesliderComponent;
  let fixture: ComponentFixture<NgimagesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgimagesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgimagesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
