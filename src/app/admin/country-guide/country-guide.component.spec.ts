import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryGuideComponent } from './country-guide.component';

describe('CountryGuideComponent', () => {
  let component: CountryGuideComponent;
  let fixture: ComponentFixture<CountryGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
