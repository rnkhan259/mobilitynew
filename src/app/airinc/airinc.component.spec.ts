import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirincComponent } from './airinc.component';

describe('AirincComponent', () => {
  let component: AirincComponent;
  let fixture: ComponentFixture<AirincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirincComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
