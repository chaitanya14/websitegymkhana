import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerssliderComponent } from './playersslider.component';

describe('PlayerssliderComponent', () => {
  let component: PlayerssliderComponent;
  let fixture: ComponentFixture<PlayerssliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerssliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerssliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
