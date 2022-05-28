import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxgridComponent } from './taxgrid.component';

describe('TaxgridComponent', () => {
  let component: TaxgridComponent;
  let fixture: ComponentFixture<TaxgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
