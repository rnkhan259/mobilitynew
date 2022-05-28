import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaDocComponent } from './visa-doc.component';

describe('VisaDocComponent', () => {
  let component: VisaDocComponent;
  let fixture: ComponentFixture<VisaDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
